import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, google)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, github)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateProfilePic = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {

        }).catch(error => {

        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
        updateProfilePic

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
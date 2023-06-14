import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const { createUser, googleSignIn, updateProfilePic } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [show, setShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)



    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                // console.log("logged user", loggedUser);
                updateProfilePic(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photo: data.photo, role: 'student' }
                        axiosSecure.post("/users", savedUser)
                            .then(data => {
                                console.log("saved", data.data)
                                if (data.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => console.log(error.message))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, role: 'student' }

                // axiosSecure.post("/users", savedUser)
                //     .then(data => {
                //         console.log(data);
                //         if (data.data.insertedId) {
                //             Swal.fire({
                //                 title: 'User Login Successfully.',
                //                 showClass: {
                //                     popup: 'animate__animated animate__fadeInDown'
                //                 },
                //                 hideClass: {
                //                     popup: 'animate__animated animate__fadeOutUp'
                //                 }
                //             })
                //             navigate(from, { replace: true })
                //         }
                //     })
                fetch("https://park-sports-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset()
                            Swal.fire({
                                title: 'User Login Successfully.',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }



    const validatePasswordMatch = (value) => {
        const password = watch('password', '');
        return value === password || "Passwords don't match.";
    };


    return (
        <>
            <Helmet>
                <title>Sign Up | PARK SPORTS ACADEMY</title>
            </Helmet>
            <div className="relative flex flex-col justify-center h-screen mb-20">
                <div className="lg:flex lg:gap-x-4 justify-center items-center mx-4">
                    <div className="lg:max-w-xl w-full">
                        <img
                            className="w-full h-full object-cover rounded-md"
                            src="https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233__340.jpg"
                            alt="sign up with image"
                        />
                    </div>
                    <div className="w-full bg-white rounded-md lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-green-500 uppercase">
                            Create an account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                            <div className="mb-2">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Name
                                </label>
                                <input
                                    type="text" name="name" placeholder="Enter Your Name" {...register("name", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Photo URL
                                </label>
                                <input
                                    type="text" name="photo" placeholder="Enter Your Photo URL" {...register("photo", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    type="email" name="email" placeholder="Enter Your Email" {...register("email", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Password
                                </label>
                                <div className='flex items-center'>
                                    <input
                                        // TODO PASS    
                                        type={show ? "text" : "password"} name="password" placeholder="Enter Your Password" {...register("password", {
                                            required: true,
                                            pattern: /(?=.*?[a-z])(?=.*?[0-9])/,
                                            maxLength: 6
                                        })}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    <p className='-ml-16' onClick={() => setShow(!show)}><small>
                                        {
                                            show ? <FaEye className='w-6 h-6 mb-2'></FaEye> : <FaEyeSlash className='w-6 h-6 mb-2'></FaEyeSlash>
                                        }
                                    </small></p>
                                </div>
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be 6 or less character</span>}
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Confirm Password
                                </label>
                                <div className='flex items-center'>
                                    <input
                                        type={confirmShow ? "text" : "password"} name="confirmPassword" placeholder="Enter Your Password" {...register("confirm", {
                                            required: true,
                                            validate: validatePasswordMatch
                                        })}
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    <p className='-ml-16' onClick={() => setConfirmShow(!confirmShow)}><small>
                                        {
                                            confirmShow ? <FaEye className='w-6 h-6 mb-2'></FaEye> : <FaEyeSlash className='w-6 h-6 mb-2'></FaEyeSlash>
                                        }
                                    </small></p>
                                </div>
                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                            </div>

                            <div className="mt-6">
                                <input type="submit" className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-gray-600" value="Sign Up" />
                            </div>
                        </form>
                        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                            <div className="absolute px-5 bg-white">Or</div>
                        </div>
                        <div className="flex mt-4 gap-x-2">
                            <button onClick={handleGoogleSignIn} className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-gray-600"><FcGoogle></FcGoogle> GOOGLE</button>
                        </div>
                        <p className="mt-2 text-xs text-center text-gray-700">
                            {" "}
                            Already a member?{" "}
                            <Link to="/login" className="font-medium text-green-500 hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
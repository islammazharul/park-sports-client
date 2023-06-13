import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [show, setShow] = useState(false)

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
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
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                const savedUser = { name: loggedUser.name, email: loggedUser.email, photo: loggedUser.photoURL }
                // axiosSecure.post("/users", savedUser)
                //     .then(data => {
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
                fetch("http://localhost:5000/users", {
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

    return (
        <>
            <Helmet>
                <title>PARK SPORTS ACADEMY | Sign In</title>
            </Helmet>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-green-500 uppercase">
                        Sign in
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email" name="email" placeholder="Enter Your Email" {...register("email", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <div className='flex items-center'>
                                <input
                                    type={show ? "text" : "password"} name="password" placeholder="Enter Your Password" {...register("password", {
                                        required: true,
                                    })}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <p className='-ml-16' onClick={() => setShow(!show)}><small>
                                    {
                                        show ? <FaEye className='w-6 h-6 mb-2'></FaEye> : <FaEyeSlash className='w-6 h-6 mb-2'></FaEyeSlash>
                                    }
                                </small></p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-green-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <input type="submit" className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-gray-600" value="LOGIN" />
                        </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                        <div className="absolute px-5 bg-white">Or</div>
                    </div>
                    <div className="flex mt-4 gap-x-2">
                        <button onClick={handleGoogleSignIn} className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-gray-600"><FcGoogle></FcGoogle> GOOGLE</button>
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-medium text-green-500 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
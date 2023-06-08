import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'User Log Out Successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <nav className="w-full bg-green-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link>
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white text-sm font-semibold hover:text-indigo-200">
                                <Link>HOME</Link>
                            </li>
                            <li className="text-sm font-semibold text-white hover:text-indigo-200">
                                <Link to="/instructors">INSTRUCTORS</Link>
                            </li>
                            <li className="text-sm font-semibold text-white hover:text-indigo-200">
                                <Link to="/classes">CLASSES</Link>
                            </li>
                            <li className="text-sm font-semibold text-white hover:text-indigo-200">
                                <Link to="/dashboard">DASHBOARD</Link>
                            </li>
                        </ul>

                        <div className="mt-2 lg:hidden md:inline-block">
                            <Link to="/login"
                                className="inline-block  px-3 py-1 text-center text-white bg-gray-600 shadow hover:bg-gray-800"
                            >
                                SIGN IN
                            </Link>
                            <a onClick={handleLogOut} className="inline-block  px-3 py-1 text-center text-green-500 bg-white shadow hover:bg-gray-100"
                            >
                                LOG OUT
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <Link to="/login"

                        className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 shadow hover:bg-gray-800"
                    >
                        SIGN IN
                    </Link>
                    <a
                        onClick={handleLogOut}
                        className="px-4 py-2 text-sm font-semibold text-green-500 bg-white shadow hover:bg-gray-100"
                    >
                        LOG OUT
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
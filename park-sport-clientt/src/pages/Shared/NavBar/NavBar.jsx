import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { RxCross2 } from 'react-icons/rx';
import { FaBars } from 'react-icons/fa';

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
                                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {
                                    navbar ? <RxCross2></RxCross2> : <FaBars></FaBars>
                                }
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

                        <div className="mt-2 lg:hidden md:inline-block flex justify-between items-center flex-row-reverse">
                            {
                                user ?
                                    <div className="tooltip tooltip-left w-10" data-tip={user.displayName}>
                                        <img className='rounded-full' src={user?.photoURL} />
                                    </div> : ""

                            }
                            {
                                user ? <a onClick={handleLogOut} className="inline-block  px-3 py-1 text-center text-green-500 bg-white shadow hover:bg-gray-100"
                                >
                                    LOG OUT
                                </a> : <Link to="/login"
                                    className="inline-block  px-3 py-1 text-center text-white bg-gray-600 shadow hover:bg-gray-800"
                                >
                                    SIGN IN
                                </Link>
                            }


                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex md:inline-block items-center gap-1">
                    {
                        user ?
                            <div className="tooltip tooltip-left w-10" data-tip={user.displayName}>
                                <img className='rounded-full' src={user?.photoURL} />
                            </div> : ""

                    }
                    {
                        user ? <a
                            onClick={handleLogOut}
                            className="px-4 py-2 text-sm font-semibold text-green-500 bg-white shadow hover:bg-gray-100"
                        >
                            LOG OUT
                        </a> : <Link to="/login"

                            className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 shadow hover:bg-gray-800"
                        >
                            SIGN IN
                        </Link>
                    }


                </div>
            </div>
        </nav>
    );
};

export default NavBar;
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
// import UserHome from '../pages/Dashboard/User/UserHome/UserHome';
// import { FaBars, FaBook, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    const userLinks = [
        { link: `/dashboard/mySelectedClass`, label: "My Selected Classes" },
        { link: `/dashboard/myEnrolle`, label: "My Enrolled Classes" },
        // { link: `/`, label: "Back to Home" },
    ];
    const instructorLinks = [
        { link: `/dashboard/addClasses`, label: 'Add a Class' },
        { link: `/dashboard/myClasses`, label: 'My Classes' },
    ];
    const adminLinks = [
        { link: `/dashboard/manageClasses`, label: 'Manage Classes' },
        { link: `/dashboard/manageUsers`, label: 'Manage Users' },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white font-semibold flex flex-col items-center justify-center lg:w-64">
                <h1 className="text-2xl font-bold">welcome</h1>
                {/* Sidebar Content */}
                <div className="p-4">
                    <ul className="mt-4">
                        {userLinks?.map((link) => (
                            <li key={link?.label} className="mb-2">
                                <Link
                                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md block"
                                    to={link.link}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {instructorLinks?.map((link) => (
                            <li key={link?.label} className="mb-2">
                                <Link
                                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md block"
                                    to={link.link}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        {adminLinks?.map((link) => (
                            <li key={link?.label} className="mb-2">
                                <Link
                                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md block"
                                    to={link.link}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="mb-2">
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-md block"

                            >
                                Back to Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                {/* Content goes here */}
                <div className="p-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
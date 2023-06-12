import React, { useContext } from 'react';
import image from '../../../assets/Home/dashboard.avif'
import { AuthContext } from '../../../provider/AuthProvider';

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='lg:flex justify-start items-center space-y-5'>
            <img src={image} alt="" />
            <h1 className='lg:text-4xl font-bold ml-20 uppercase font-mono'>hi, <span className='text-green-500'>{user?.displayName}</span> welcome to<br /> your dashboard</h1>
        </div>
    );
};

export default DashboardHome;
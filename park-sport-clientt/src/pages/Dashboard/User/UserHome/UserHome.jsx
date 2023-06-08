import React from 'react';
import { NavLink } from 'react-router-dom';

const UserHome = () => {
    return (
        <div>

            <NavLink to="/dashboard/mybooking">
                <button className="btn btn-outline btn-primary">My Booking</button>
            </NavLink>
            <h2>Welcome to Your Dashboard user</h2>
        </div>
    );
};

export default UserHome;
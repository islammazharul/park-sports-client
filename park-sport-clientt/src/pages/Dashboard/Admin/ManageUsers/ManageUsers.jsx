import React, { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { FaUsers, FaTrashAlt } from 'react-icons/fa';

const ManageUsers = () => {
    // const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })
    return (
        <div className='w-full'>
            <Helmet>
                <title>Manage Users | Park Sports</title>
            </Helmet>
            <h3 className="text-3xl font-semibold uppercase my-4">total users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 && users.map((user, index) => <>

                                <tr key={user._id}>

                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-yellow-600 text-white">Make Admin</button>
                                        }
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-xs bg-indigo-600 text-white">Make Instructor</button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-small text-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr></>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
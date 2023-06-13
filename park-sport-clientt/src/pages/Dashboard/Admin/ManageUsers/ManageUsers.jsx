import React, { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { FaUsers, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const ManageUsers = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(data => {
                // console.log("data", data.data);
                if (data.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} make admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        axiosSecure.patch(`/user/instructor/${user._id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} make instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Manage Users | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MANAGE USERS"></SectionTitle>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-500 text-white'>
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
                            users.length > 0 && users.map((user, index) =>

                                <tr key={user._id}>

                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>

                                        {
                                            user.role === 'admin' ? <button disabled onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-yellow-600 text-white">Make Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-yellow-600 text-white">Make Admin</button>
                                        }

                                    </td>
                                    <td>
                                        {
                                            user.role === 'instructor' ? <button disabled onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-xs bg-indigo-600 text-white">Make Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-xs bg-indigo-600 text-white">Make Instructor</button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost btn-small text-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
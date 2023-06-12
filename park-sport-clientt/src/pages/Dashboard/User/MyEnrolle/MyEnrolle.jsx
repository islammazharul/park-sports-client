import React, { useContext } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../../provider/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useEnrollClass from '../../../../hooks/useEnrollClass';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyEnrolle = () => {
    const [enroll, refetch] = useEnrollClass()
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = select => {
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
                axiosSecure.delete(`/myEnrollClass/${select._id}`)
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
        <div>
            <Helmet>
                <title>My Enrolled Classes | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MY ENROLLED CLASSES"></SectionTitle>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-500 text-white'>
                            <th>#</th>
                            <th>INSTRUCTOR IMAGE</th>
                            <th>INSTRUCTOR NAME</th>
                            <th>CLASS NAME</th>
                            <th>TRANSACTION ID</th>
                            <th>BOOKING DATE</th>
                            <th>PRICE</th>
                            <th>DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            enroll.map((select, index) => <tr
                                key={select._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={select.instructor_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {select.instructor_name}
                                </td>
                                <td>
                                    {select.classNames}
                                </td>
                                <td>
                                    {select.transactionId}
                                </td>
                                <td>
                                    {select.date}
                                </td>

                                <td className='text-start'>$ {select.price}</td>

                                <td>
                                    <button onClick={() => handleDelete(select)} className="btn btn-ghost btn-small text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyEnrolle;
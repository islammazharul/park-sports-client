import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useSelectClass from '../../../../hooks/useSelectClass';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MySelectedClass = () => {
    const [selectClass, refetch] = useSelectClass()
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
                axiosSecure.delete(`/select/${select._id}`)
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

    const handlePay = select => {

    }

    return (
        <div className='w-full max-h-full'>
            <Helmet>
                <title>My Selected Class | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MY SELECTED CLASSES"></SectionTitle>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-500 text-white'>
                            <th>#</th>
                            <th>INSTRUCTOR IMAGE</th>
                            <th>INSTRUCTOR NAME</th>
                            <th>CLASS NAME</th>
                            <th>AVAILABLE SEATS</th>
                            <th>PRICE</th>
                            <th>PAY</th>
                            <th>DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectClass.map((select, index) => <tr
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
                                    {select.class_name}
                                </td>
                                <td>
                                    {select.available_seat}
                                </td>

                                <td className='text-start'>$ {select.price}</td>
                                <td>
                                    <Link to="/dashboard/payment" state={select}>
                                        <button onClick={() => handlePay(select)} className='btn btn-warning btn-sm'>pay</button>
                                    </Link>
                                </td>
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

export default MySelectedClass;
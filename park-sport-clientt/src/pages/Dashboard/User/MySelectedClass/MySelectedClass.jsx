import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useSelectClass from '../../../../hooks/useSelectClass';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const MySelectedClass = () => {
    const [selectClass, refetch] = useSelectClass()
    return (
        <div className='w-full max-h-full'>
            <Helmet>
                <title>My Selected Class | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MY SELECTED CLASSES"></SectionTitle>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px] sticky top-0 z-50'>
                <h3 className="text-3xl">Total Items: {selectClass.length}</h3>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
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
                                    <Link to="/dashboard/payment">
                                        <button className='btn btn-warning btn-sm'>pay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(select)} className="btn btn-ghost btn-small bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
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
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [sports, setSports] = useState([])

    useEffect(() => {
        axiosSecure.get(`/myClasses/${user?.email}`)
            .then(data => {
                setSports(data.data)
                console.log('sport', data.data);
            })
    }, [user, axiosSecure])

    return (
        <div className='w-full max-h-full'>
            <Helmet>
                <title>My Classes | Park Sports</title>
            </Helmet>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px] sticky top-0 z-50'>
                <h3 className="text-3xl">Total Items: {sports?.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Total Enroll</th>
                            <th>Feedback</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            // sports > 0 && sports.map((sport, index) => <tr
                            //     key={sport._id}
                            // >
                            //     <td>
                            //         {index + 1}
                            //     </td>
                            //     <td>
                            //         {sport.class_name}

                            //     </td>
                            //     <td>
                            //         {sport.price}
                            //     </td>
                            //     <td className='text-end'>$ {sport.instructor_name}</td>
                            //     <td>
                            //         <button className="btn btn-ghost btn-small bg-red-600 text-white">update</button>
                            //     </td>
                            // </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;
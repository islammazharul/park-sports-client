import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

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
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className="text-3xl">Total Items: {sports?.length}</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    sports.map(sport => <>
                        <div className=" mx-auto rounded-lg shadow-md lg:flex md:flex shadow-sky-600">
                            <img
                                className="object-cover w-full md:w-1/2 lg:w-1/2"
                                src={sport.image}
                                alt="image"
                            />
                            <div className="px-6 py-4">
                                <h4 className="mb-3  text-base font-bold tracking-tight text-sky-600">
                                    Class Name :  {sport.class_name}
                                </h4>
                                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                                    Status :  {sport.status}
                                </h4>

                                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                                    Total Enrolled Students :  {sport.total_enroll}
                                </h4>
                                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                                    Available Seats :  {sport.available_seat}
                                </h4>
                                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                                    Feedback : {sport.feedback}
                                </h4>
                                <button className="btn btn-sm bg-green-500">Update</button>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>

        </div>
    );
};

export default MyClasses;
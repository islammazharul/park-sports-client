import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: sports = [], refetch } = useQuery({
        queryKey: ["sports"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/sports`)
            return res.data;
        }
    })
    const result = sports.filter(sport => sport.status === 'approved')
    console.log(result);
    return (
        <div className='mt-10'>
            <Helmet>
                <title>PARK SPORTS ACADEMY | Classes</title>
            </Helmet>
            <SectionTitle heading="All Sports Classes" subHeading="We’re fanatical about instilling confidence, strength and focus in young athletes. So, we’ve built one of the most successful youth sports training programs available today."></SectionTitle>

            <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-9/12 mx-auto my-8'>
                {
                    result.map(sport =>
                        <div key={sport._id} className="max-w-sm shadow-md shadow-green-500">
                            <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                                {sport.class_name}
                            </h4>
                            <div className='relative'>
                                <img
                                    className=" object-cover w-full h-48"
                                    src={sport.image}
                                    alt="image"
                                />
                                <p className='absolute top-0 right-0 text-center text-white font-semibold  bg-red-400 w-24'>{sport.total_enroll} Students</p>
                            </div>
                            <div className="px-6 py-4">
                                <h3 className='text-lg font-bold'>Name of Instructor : {sport.instructor_name}</h3>
                                <p className='font-bold'>Available Seats : {sport.available_seat}</p>
                                <p className='font-semibold'>Price : $ {sport.price}</p>
                                <button
                                    className="px-4 py-2 mt-3 text-md shadow bg-green-100 shadow-green-500 text-green-500 
                                    hover:bg-green-500 hover:text-green-100">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Classes;
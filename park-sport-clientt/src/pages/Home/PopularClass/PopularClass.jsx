import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: popular = [], refetch } = useQuery({
        queryKey: ["popularClass"],
        queryFn: async () => {
            const res = await axiosSecure.get("/popularClass")
            return res.data
        }
    })
    return (
        <div className='mt-10'>
            <SectionTitle heading="Most Popular Classes" subHeading="We thrive on building a player’s technical foundation and applying those skills into an appropriate competitive environment.  Most of our players have made a long-term commitment to become the best player they can, knowing that it involves hard work and dedication to reach their full potential."></SectionTitle>
            <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-9/12 mx-auto my-8'>
                {
                    popular.length > 0 && popular.map(pop =>
                        <div key={pop._id} className="max-w-sm shadow-md shadow-green-500">
                            <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                                {pop.class_name}
                            </h4>
                            <div className='relative'>
                                <img
                                    className=" object-cover w-full h-48"
                                    src={pop.class_image}
                                    alt="image"
                                />
                                <p className='absolute top-0 right-0 text-center text-white font-semibold  bg-red-400 w-24'>{pop.total_enroll} Students</p>
                            </div>
                            <div className="px-6 py-4">
                                <h3 className='text-lg font-bold'>Name of Instructor : {pop.instructor_name}</h3>
                                <p className='font-bold'>Available Seats : {pop.available_seat}</p>
                                <p className='font-semibold'>Price : $ {pop.price}</p>
                                <button
                                    onClick={() => handleEnroll(pop)}
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

export default PopularClass;
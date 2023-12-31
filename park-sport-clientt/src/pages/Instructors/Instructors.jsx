import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: Instructors = [], refetch } = useQuery({
        queryKey: ["allInstructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allInstructor")
            return res.data
        }
    })
    return (
        <div className='mt-10'>
            <Helmet>
                <title>PARK SPORTS ACADEMY | Instructors</title>
            </Helmet>
            <SectionTitle heading="All Sports Instructors" subHeading="We’re fanatical about instilling confidence, strength and focus in young athletes. So, we’ve built one of the most successful youth sports training programs available today."></SectionTitle>

            <div className="grid gap-4 md:grid-cols-3 lg:w-9/12 mx-auto my-8">
                {
                    Instructors?.length > 0 && Instructors?.map(pop =>
                        <div key={pop._id} className="p-4 shadow-md shadow-green-500">
                            <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                                <img
                                    src={pop?.photo}
                                    alt="Image"
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="font-bold text-indigo-500 md:text-lg">Name of Instructor : {pop.name}</div>
                                <div className="flex">
                                    <div className="flex gap-4">
                                        <a href="#">
                                            <svg
                                                className="w-6 h-6 text-blue-600 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                                />
                                            </svg>
                                        </a>
                                        <a href="#">
                                            <svg
                                                className="w-6 h-6 text-blue-300 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                                />
                                            </svg>
                                        </a>
                                        <a href="#">
                                            <svg
                                                className="w-6 h-6 text-blue-500 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Instructors;
import React, { useContext } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();

    const { data: sports = [], refetch } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ["sports"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allClasses`)
            return res.data;
        }
    })

    const handleEnroll = sport => {
        if (user && user?.email) {
            const selectedClass = {
                classId: sport._id, class_name: sport.class_name, class_image: sport.class_image, instructor_name: sport.instructor_name, instructor_image: sport.instructor_image,
                email: sport.email, available_seat: sport.available_seat, price: sport.price, total_enroll: sport.total_enroll
            }
            axiosSecure.post("/select", selectedClass)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class has been added in your selected list',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll this class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }

    }


    return (
        <div className='mt-10'>
            <Helmet>
                <title>Classes | PARK SPORTS ACADEMY</title>
            </Helmet>
            <SectionTitle heading="All Sports Classes" subHeading="We’re fanatical about instilling confidence, strength and focus in young athletes. So, we’ve built one of the most successful youth sports training programs available today."></SectionTitle>
            <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-9/12 mx-auto my-8'>
                {
                    sports.map(sport =>
                        <div key={sport._id} className="max-w-sm shadow-md shadow-green-500">
                            <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                                {sport.class_name}
                            </h4>
                            <div className='relative'>
                                <img
                                    className=" object-cover w-full h-48"
                                    src={sport.class_image}
                                    alt="image"
                                />
                                <p className='absolute top-0 right-0 text-center text-white font-semibold  bg-red-400 w-24'>{sport.total_enroll} Students</p>
                            </div>
                            <div className="px-6 py-4">
                                <h3 className='text-lg font-bold'>Name of Instructor : {sport.instructor_name}</h3>
                                <p className='font-bold'>Available Seats : {sport.available_seat}</p>
                                <p className='font-semibold'>Price : $ {sport.price}</p>
                                <button
                                    onClick={() => handleEnroll(sport)}
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
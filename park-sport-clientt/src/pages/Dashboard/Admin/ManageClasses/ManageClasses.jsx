import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import ManageCard from './ManageCard/ManageCard';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [disable, setDisable] = useState(true)
    const { data: sports = [], refetch, loading } = useQuery({
        queryKey: ["sports"],
        queryFn: async () => {
            const res = await axiosSecure.get("/sports")
            return res.data
        }
    })

    const handleApprove = id => {
        axiosSecure.patch(`/sports/${id}`)
            .then(data => {
                if (data.data.modifiedCount) {
                    setDisable(false)
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class approved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        console.log("id", id);
    }

    const handleDeny = sport => {

    }

    return (
        <div className='w-full max-h-full'>
            <Helmet>
                <title>Manage Classes | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MANAGE ALL CLASSES"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                {
                    sports.map(sport => <ManageCard
                        key={sport._id}
                        sport={sport}
                        handleApprove={handleApprove}
                        handleDeny={handleDeny}
                        disable={disable}
                    ></ManageCard>
                    )
                }
            </div>

        </div>
    );
};

export default ManageClasses;
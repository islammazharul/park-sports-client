import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import ManageCard from './ManageCard/ManageCard';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: sports = [], refetch, loading } = useQuery({
        queryKey: ["sports"],
        queryFn: async () => {
            const res = await axiosSecure.get("/sports")
            return res.data
        }
    })
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
                    ></ManageCard>
                    )
                }
            </div>

        </div>
    );
};

export default ManageClasses;
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectClass = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectClass = [] } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ['select', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/select?email=${user?.email}`)
            // console.log(`res from axios`, res);
            return res.data;
        }
    })
    return [selectClass, refetch]

}

export default useSelectClass;
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useEnrollClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: enroll = [], refetch } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ["myEnrollClass", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myEnrollClass?email=${user?.email}`)
            return res.data
        }
    })
    return [enroll, refetch]
}
export default useEnrollClass;
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (!user) {
                return
            }
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('is admin response', res);
            return res?.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;
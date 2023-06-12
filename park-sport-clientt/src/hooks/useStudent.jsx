import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useStudent = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ['isStudent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`)
            console.log('is Student response', res);
            return res.data.student
        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;
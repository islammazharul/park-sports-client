import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useStudent from '../hooks/useStudent';
import { Navigate, useLocation } from 'react-router-dom';

const StudentRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const [isStudent, isStudentLoading] = useStudent()
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;
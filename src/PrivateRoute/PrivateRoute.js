import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    const local_user = localStorage.getItem("user") || "";
    return (
        local_user? children: <Navigate to="/login" state={{from:location.pathname}}/>
    );
};

export default PrivateRoute;
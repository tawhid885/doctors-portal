import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {admin,user} = useAuth();
    const location = useLocation();
    const local_user = localStorage.getItem("user") || "";
    return (
        local_user && admin ? children: <Navigate to="/" state={{from:location.pathname}}/>
    );
};

export default AdminRoute;
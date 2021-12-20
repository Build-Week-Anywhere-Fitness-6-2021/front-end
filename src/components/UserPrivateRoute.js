import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const UserPrivateRoute = () => {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/userlogin" />;
};

export default UserPrivateRoute





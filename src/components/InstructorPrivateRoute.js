import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const InstructorPrivateRoute = () => {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/instructorlogin" />;
};

export default InstructorPrivateRoute



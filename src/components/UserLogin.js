import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserHeader from './UserHeader';
import axiosWithAuth from '../axiosWithAuth.js/axiosWithAuth';

const UserLogin = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();
    const userCredentials = {userEmail, userPassword};

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('endpoint/here', userCredentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                navigate("/userdashboard");
            })
            .catch(err => {
                console.log(err);
            })
        
    }

    
    return (
        <div>
            <UserHeader />
            <form onSubmit={handleSubmit} className="login">
                <h1>Anywhere Fitness Members</h1>
                <label>
                    Email Address
                    <input 
                        type="email" 
                        name="email" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <button type="submit">
                    Login
                </button>
                <p>Don't have an account?</p><Link to="/usersignup">Sign up</Link>
            </form>
        </div>
    )
}

export default UserLogin

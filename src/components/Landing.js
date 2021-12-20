import React from 'react'
import '../css/Landing.css'
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

const Landing = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [instructorEmail, setInstructorEmail] = useState("");
    const [instructorPassword, setInstructorPassword] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (
        <div className="container">
            <div className="user">
                <form onSubmit={handleSubmit} className="login">
                    <h1>Anywhere Fitness Members</h1>
                    <label>
                        Email Address
                        <input 
                            type="email" 
                            name="email" 
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type="password" 
                            name="password" 
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">
                        Login
                    </button>
                    <p>Don't have an account?</p><Link to="/signup">Sign up</Link>
                </form>
            </div>
            <div className="instructor">
                <form onSubmit={handleSubmit} className="login">
                <h1>Anywhere Fitness Instructors</h1>
                    <label>
                        Email Address
                        <input 
                            type="email" 
                            name="email" 
                            value={instructorEmail}
                            onChange={(e) => setInstructorEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type="password" 
                            name="password" 
                            value={instructorPassword}
                            onChange={(e) => setInstructorPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">
                        Login
                    </button>
                    <p>Don't have an account?</p>
                </form>
            </div>
        </div>
    )
}

export default Landing

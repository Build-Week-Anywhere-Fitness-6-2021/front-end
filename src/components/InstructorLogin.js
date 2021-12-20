import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

const InstructorLogin = () => {
    const [instructorEmail, setInstructorEmail] = useState("");
    const [instructorPassword, setInstructorPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    
    return (
        <div>
            <Header />
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
    )
}

export default InstructorLogin

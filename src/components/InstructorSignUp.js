import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InstructorHeader from './InstructorHeader';

const initialValues = [{
    firstName: "First name*",
    lastName: "Last name*",
    email: "Email address*",
    instructorCode: "",
    password: "Password*"
}];

const SignUp = () => {
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('endpoint/here', {values})
        .then(res => {
            console.log(res)
            navigate("/instructorlogin");
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <InstructorHeader />
            <form onSubmit={handleSubmit} className='login'>
                <h2>Create your account</h2>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName" 
                        value={values.firstName}
                        onChange={(e) => setValues(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName" 
                        value={values.lastName}
                        onChange={(e) => setValues(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <label>
                    Email Address
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email}
                        onChange={(e) => setValues(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <label>
                    Instructor Authorization Code
                    <input 
                        type="password" 
                        name="instructorCode" 
                        value={values.instructorCode}
                        onChange={(e) => setValues(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        value={values.password}
                        onChange={(e) => setValues(e.target.value)}
                        autoComplete="on"
                    />
                </label>
                <button type="submit">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUp

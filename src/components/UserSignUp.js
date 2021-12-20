import React from 'react'
import Header from './Header';
import { useState } from 'react';

const initialValues = [{
    firstName: "First name*",
    lastName: "Last name*",
    email: "Email address*",
    password: "Password*"
}];

const SignUp = () => {
    const [values, setValues] = useState(initialValues);



    return (
        <div>
            <Header />
            <form className='login'>
                <h2>Create your account</h2>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName" 
                        value={values.firstName}
                        onChange={(e) => setValues(e.target.value)}
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName" 
                        value={values.lastName}
                        onChange={(e) => setValues(e.target.value)}
                    />
                </label>
                <label>
                    Email Address
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email}
                        onChange={(e) => setValues(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        value={values.password}
                        onChange={(e) => setValues(e.target.value)}
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

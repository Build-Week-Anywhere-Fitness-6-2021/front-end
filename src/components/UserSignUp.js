import React from 'react'
import UserHeader from './UserHeader';
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
            <UserHeader />
            <form className='login'>
                <h2>Create your account</h2>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName" 
                        value={values.firstName}
                        onChange={(e) => setValues(e.target.value)}
                        autocomplete="on"
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName" 
                        value={values.lastName}
                        onChange={(e) => setValues(e.target.value)}
                        autocomplete="on"
                    />
                </label>
                <label>
                    Email Address
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email}
                        onChange={(e) => setValues(e.target.value)}
                        autocomplete="on"
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        value={values.password}
                        onChange={(e) => setValues(e.target.value)}
                        autocomplete="on"
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

import React from 'react'
import UserHeader from './UserHeader';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/SignUp.css";


const initialValues = [
  {
    firstName: "First name*",
    lastName: "Last name*",
    email: "Email address*",
    password: "Password*",
  },
];

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
    <div className="signUp-container">
      <UserHeader />
      <form onSubmit={handleSubmit} className="formSignUp-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={(e) => setValues(e.target.value)}
          autoComplete="on"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={(e) => setValues(e.target.value)}
          autoComplete="on"
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => setValues(e.target.value)}
          autoComplete="on"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={(e) => setValues(e.target.value)}
          autoComplete="on"
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
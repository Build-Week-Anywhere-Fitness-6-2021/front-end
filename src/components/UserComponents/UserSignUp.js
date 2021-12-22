import React from "react";
import UserHeader from "./UserHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import "../../css/SignUp.css";


const SignUp = () => {
  const [values, setValues] = useState(
    {
      user_id: "",
      username: "",
      password: "",
      email: "",
      role_id: "",
      role: "",
    }
  );
  const navigate = useNavigate();
  const userCredentials = { 
    email: values.email,
    username: values.username,
    password: values.password,
    
    // role_id: 1
   }

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('https://anywhere-fitness-6-2021.herokuapp.com/api/users', { userCredentials })
      .then((res) => {
        console.log(res);
        //navigate("/userlogin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signUp-container">
      <UserHeader />
      <form onSubmit={handleSubmit} className="formSignUp-container">
        <h2>Sign Up</h2>
        {/* <input
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
        /> */}
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;

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
      username: "",
      password: "",
      email: "",
    }
  );
  const navigate = useNavigate();
  const userCredentials = { 
    email: values.email,
    username: values.username,
    password: values.password,
   }

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://anywhere-fitness-6-2021.herokuapp.com/api/users', userCredentials )
      .then((res) => {
        console.log(res);
        setValues(res.data);
        navigate("/userlogin");
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

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import "../../css/Login.css";

const UserLogin = () => {
  const [values, setValues] = useState(
    {
      username: "",
      password: "",
    }
  );
  const navigate = useNavigate();
  const userCredentials = { 
    username: values.username, 
    password: values.password 
  };

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://anywhere-fitness-6-2021.herokuapp.com/api/auth/login", userCredentials)
      .then((res) => {
        setValues(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/userdashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login-container">
      <UserHeader />
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Anywhere Fitness Members</h1>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
        <Link to="/usersignup" className="link">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import "../../css/Login.css";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const userCredentials = { email: username, password: userPassword };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://reqres.in/api/login", userCredentials)
      // email: eve.holt@reqres.in password: cityslicka
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/userdashboard");
      })
      .catch((err) => {
        console.log(err);
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="on"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
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

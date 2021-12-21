import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import "../../css/Login.css";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userCredentials = { email: email, password: password };

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
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

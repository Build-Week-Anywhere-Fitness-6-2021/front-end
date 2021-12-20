import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";
import "../css/Login.css";

const UserLogin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <UserHeader />
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Anywhere Fitness Members</h1>
        <input
          type="email"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          autoComplete="on"
          placeholder="Email Address"
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

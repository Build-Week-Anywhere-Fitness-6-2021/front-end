import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import InstructorHeader from "./InstructorHeader";
import "../../css/Login.css";

const InstructorLogin = () => {
  const [instructorUsername, setInstructorUsername] = useState("");
  const [instructorPassword, setInstructorPassword] = useState("");
  const userCredentials = { email: instructorUsername, password: instructorPassword };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://reqres.in/api/login", userCredentials)
      // email: eve.holt@reqres.in password: cityslicka
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/instructordashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <InstructorHeader />
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Anywhere Fitness Instructors</h1>
        <input
          type="text"
          name="username"
          value={instructorUsername}
          onChange={(e) => setInstructorUsername(e.target.value)}
          autoComplete="on"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={instructorPassword}
          onChange={(e) => setInstructorPassword(e.target.value)}
          autoComplete="on"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
        <Link to="/instructorsignup" className="link">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default InstructorLogin;

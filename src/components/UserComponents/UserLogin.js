import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import "../../css/Login.css";
import * as yup from "yup";
import { userLoginSchema } from "./UserFormSchema";

const initialFormErrors = {
  name: "",
};

const UserLogin = () => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);
  const [values, setValues] = useState({
    // firstName: "",
    // lastName: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const userCredentials = { email: values.username, password: values.password };

  const validateForm = (name, value) => {
    yup
      .reach(userLoginSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (e) => {
    validateForm(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

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
    navigate("/userdashboard");
  };

  useEffect(() => {
    userLoginSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

  return (
    <div className="login-container">
      <UserHeader />
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Anywhere Fitness Members</h1>
        <p className="required">{formErrors.username}</p>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Username"
        />
        <p className="required">{formErrors.password}</p>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Password"
        />
        <button type="submit" disabled={disabled}>
          Login
        </button>
        <p>Don't have an account?</p>
        <Link to="/usersignup" className="link">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;

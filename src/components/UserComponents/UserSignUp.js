import React from "react";
import UserHeader from "./UserHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import "../../css/SignUp.css";
import * as yup from "yup";
import { userSignUpSchema } from "./UserFormSchema";

const initialFormErrors = {
  name: "",
};

const SignUp = () => {
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const userCredentials = {
    email: values.email,
    username: values.username,
    password: values.password,
  };

  const validateForm = (name, value) => {
    yup
      .reach(userSignUpSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (e) => {
    validateForm(e.target.name, e.target.value);
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

  useEffect(() => {
    userSignUpSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

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
        <p className="required">{formErrors.username}</p>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Username"
        />
        <p className="required">{formErrors.email}</p>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Email"
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
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;

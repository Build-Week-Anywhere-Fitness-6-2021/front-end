import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../../axiosWithAuth.js/axiosWithAuth";
import InstructorHeader from "./InstructorHeader";
import "../../css/Login.css";
import * as yup from "yup";
import { instructorLoginSchema } from "./InstructorFormSchema";

const initialFormErrors = {
  name: "",
};

const InstructorLogin = () => {
  const [values, setValues] = useState({
    // firstName: "",
    // lastName: "",
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);
  const userCredentials = {
    email: values.username,
    password: values.password,
  };
  const navigate = useNavigate();

  const validateForm = (name, value) => {
    yup
      .reach(instructorLoginSchema, name)
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
    // axiosWithAuth()
    //   .post("https://reqres.in/api/login", userCredentials)
    //   // email: eve.holt@reqres.in password: cityslicka
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("token", res.data.token);
    //     navigate("/instructordashboard");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    navigate("/instructordashboard");
  };

  useEffect(() => {
    instructorLoginSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

  return (
    <div className="login-container">
      <InstructorHeader />
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Anywhere Fitness Instructors</h1>
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
        <Link to="/instructorsignup" className="link">
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default InstructorLogin;

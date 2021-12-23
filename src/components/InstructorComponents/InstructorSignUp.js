import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InstructorHeader from "./InstructorHeader";
import "../../css/SignUp.css";
import * as yup from "yup";
import { instructorSignUpSchema } from "./InstructorFormSchema";

const initialFormErrors = {
  name: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);
  const [values, setValues] = useState({
    // firstName: "",
    // lastName: "",
    username: "",
    email: "",
    instructorCode: "",
    password: "",
  });
  const userCredentials = {
    username: values.username,
    password: values.password,
    email: values.email,
    instructorCode: values.instructorCode,
  };

  const validateForm = (name, value) => {
    yup
      .reach(instructorSignUpSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (e) => {
    validateForm(e.target.name, e.target.value);
    console.log(values)
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://anywhere-fitness-6-2021.herokuapp.com/api/instructors/register", userCredentials )
      .then((res) => {
        console.log(res);
        setValues(res.data)
        navigate("/instructorlogin");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    // navigate("/instructorlogin");
  };

  useEffect(() => {
    instructorSignUpSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

  return (
    <div className="signUp-container">
      <InstructorHeader />
      <form onSubmit={handleSubmit} className="formSignUp-container">
        <h2>Sign Up</h2>
        {/* <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          autoComplete="on"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
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
        <p className="required">{formErrors.instructorCode}</p>
        <input
          type="text"
          name="instructorCode"
          value={values.instructorCode}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Instructor Authorization Code"
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

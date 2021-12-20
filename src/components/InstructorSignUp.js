import React from "react";
import { useState } from "react";
import InstructorHeader from "./InstructorHeader";
import "../css/SignUp.css";

const initialValues = [
  {
    firstName: "First name*",
    lastName: "Last name*",
    email: "Email address*",
    instructorCode: "",
    password: "Password*",
  },
];

const SignUp = () => {
  const [values, setValues] = useState(initialValues);

  return (
    <div className="signUp-container">
      <InstructorHeader />
      <form className="formSignUp-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={(e) => setValues(e.target.value)}
          autocomplete="on"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={(e) => setValues(e.target.value)}
          autocomplete="on"
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => setValues(e.target.value)}
          autocomplete="on"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={values.instructorCode}
          onChange={(e) => setValues(e.target.value)}
          autocomplete="on"
          placeholder="Instructor Authorization Code"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={(e) => setValues(e.target.value)}
          autocomplete="on"
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;

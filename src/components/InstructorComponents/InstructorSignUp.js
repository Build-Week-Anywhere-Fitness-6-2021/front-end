import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InstructorHeader from "./InstructorHeader";
import "../../css/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(
    {
      username: "",
      email: "",
      instructorCode: "",
      password: "",
      role_id: 1
    },
  );
  const userCredentials = { 
    username: values.username,
    password: values.password,
    email: values.email,
    role_id: values.instructorCode,
   }
  

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (values.instructorCode === "password") {
    //   ...values,

    // }
    // axios
    //   .post("https://anywhere-fitness-6-2021.herokuapp.com/api/users", { userCredentials })
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/instructorlogin");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
      navigate("/instructorlogin");
  };

  return (
    <div className="signUp-container">
      <InstructorHeader />
      <form onSubmit={handleSubmit} className="formSignUp-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Email"
        />
        <input
          type="password"
          name="instructorCode"
          value={values.instructorCode}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Instructor Authorization Code"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="on"
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;

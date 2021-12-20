import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from '../axiosWithAuth.js/axiosWithAuth';
import InstructorHeader from './InstructorHeader';
import "../css/Login.css";

const InstructorLogin = () => {
    const [instructorEmail, setInstructorEmail] = useState("");
    const [instructorPassword, setInstructorPassword] = useState("");
    const userCredentials = {instructorEmail, instructorPassword};
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('endpoint/here', userCredentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            navigate("/instructordashboard");
        })
        .catch(err => {
            console.log(err);
        })
    }

    
    return (
        <div class="login-container">
            <InstructorHeader />
            <form onSubmit={handleSubmit} className="form-container">
                <h1>Anywhere Fitness Instructors</h1>
                    <label>
                        Email Address
                        <input 
                            type="email" 
                            name="email" 
                            value={instructorEmail}
                            onChange={(e) => setInstructorEmail(e.target.value)}
                            autoComplete="on"
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type="password" 
                            name="password" 
                            value={instructorPassword}
                            onChange={(e) => setInstructorPassword(e.target.value)}
                            autoComplete="on"
                        />
                    </label>
                    <button type="submit">
                        Login
                    </button>
                    <p>Don't have an account?</p><Link to="/instructorsignup">Sign up</Link>
            </form>
        </div>
    )
}


        <input
          type="email"
          name="email"
          value={instructorEmail}
          onChange={(e) => setInstructorEmail(e.target.value)}
          autoComplete="on"
          placeholder="Email Address"
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
        <Link to="/instructorsignup">Sign up</Link>
      </form>
    </div>
  );
};

export default InstructorLogin;

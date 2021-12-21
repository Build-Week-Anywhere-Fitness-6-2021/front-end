import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"

const InstructorHeader = () => {
    return (
        <div className="header-container">
            <nav className="header-nav">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/instructorlogin" >Login</Link>
                    <Link to="/instructorsignup" >Sign up</Link>
                    {/* <Link to="/login" >Class search</Link>
                    <Link to="/login" >Modify classes</Link> */}
                </ul>
            </nav>
        </div>
    )
}

export default InstructorHeader

import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/UserHeader.css";

const UserHeader = () => {
    return (
        <div className='header-container'>
            <nav className='header-nav'>
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <ul >
                    <Link to="/">Home</Link>
                    <Link to="/userlogin" >Login</Link>
                    <Link to="/usersignup" >Sign up</Link>
                    <Link to="/searchclasses" >Class search</Link>
                    {/* <Link to="/login" >Modify classes</Link> */}
                </ul>
            </nav>
        </div>
    )
}

export default UserHeader
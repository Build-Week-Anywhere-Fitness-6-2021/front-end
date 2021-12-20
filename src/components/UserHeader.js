import React from 'react'
import { Link } from "react-router-dom";

const UserHeader = () => {
    return (
        <div>
            <nav>
                <h3>Anywhere Fitness</h3>
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

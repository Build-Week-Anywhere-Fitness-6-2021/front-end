import React from 'react'
import { Link } from "react-router-dom";

const InstructorHeader = () => {
    return (
        <div>
            <nav>
                <h3>Anywhere Fitness</h3>
                <ul >
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

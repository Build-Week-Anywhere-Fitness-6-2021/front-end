import React from 'react';
import '../css/Landing.css';
import { Link } from "react-router-dom";


const Landing = () => {

    return (
        <div className="container">
            <div className="user">
                <button>SEARCH CLASSES</button>
                <Link to="/userlogin">USER LOGIN</Link>
            </div>
            <div className="instructor">
                <button>EXPLORE THE SOFTWARE</button>
                <Link to="/instructorlogin">INSTRUCTOR LOGIN</Link>
            </div>
        </div>
    )
}

export default Landing

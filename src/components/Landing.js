import React from 'react';
import '../css/Landing.css';
import { Link } from "react-router-dom";


const Landing = () => {

    return (
        <div className="container">
            
            <div className="user">
            <div className='userBGI'></div>
                <nav className='landingNav'>
                <Link to="/searchclasses"><button>SEARCH CLASSES</button></Link>
                <Link to="/userlogin">USER LOGIN</Link>
                </nav>
            
            </div>
            <div className="instructor">
                <div className='instructorBGI'></div>
                <nav className='landingNav'>
                <button>EXPLORE THE SOFTWARE</button>
                <Link to="/instructorlogin">INSTRUCTOR LOGIN</Link>
                </nav>
            </div>
        </div>
    )
}

export default Landing

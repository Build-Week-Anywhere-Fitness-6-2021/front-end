import React from 'react';
import '../css/Landing.css';
import { Link } from "react-router-dom";
import { styled } from 'styled-components'

const linkStyle = {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold',
    transition: '0.1s',
    '&:hover': {
        color: '#F58A07',
        borderBottom: '4px solid #F58A07',
    }
}


const Landing = () => {
    // testpull
    return (
        <div className="container">
            
            <div className="user">
            <div className='userBGI'></div>
                <nav className='userLandingNav'>
                <Link to="/userlogin" style={linkStyle}>USER LOGIN</Link>
                </nav>
            <div className='userInfo'>
                <h2>Find a class perfect for you!</h2>
                <p> At Anywhere Fitness we have the perfect program <br/>for all of your fitness needs! </p>
                <Link to="/searchclasses"><button>SEARCH CLASSES</button></Link>
            </div>
            </div>

            <div className="instructor">
                <div className='instructorBGI'></div>
                <nav className='instructorLandingNav'>
                    <Link to="/instructorlogin" style={linkStyle}>INSTRUCTOR LOGIN</Link>
                </nav>
                <div className='instructorInfo'>
                    <h2>Explore our tools for <br/>creating the perfect course!</h2>
                    <p>We have the resources to help you create and host<br/> the ideal programs for you and your students!</p>
                    <button>EXPLORE THE SOFTWARE</button>
                </div>
            </div>
        </div>
    )
}

export default Landing

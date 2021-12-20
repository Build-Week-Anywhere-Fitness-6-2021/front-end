import React from 'react'
import UserHeader from './UserHeader'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
    return (
        <div>
            <UserHeader />
            <h1>USER DASHBOARD</h1>
            <p>map of classes they are registered for with the ability to cancel and refund punch pass credit</p>
            <p>map of purchased punch passes that displays how many have been used</p>
            <Link to="/punchpass"><button>Click to buy punch passes</button></Link>
        </div>
    )
}

export default UserDashboard

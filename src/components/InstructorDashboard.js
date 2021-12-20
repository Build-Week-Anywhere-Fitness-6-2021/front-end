import React from 'react'
import { Link } from "react-router-dom"
import InstructorHeader from './InstructorHeader'


const InstructorDashboard = () => {
    
    return (
        <div>
            <InstructorHeader />
            <h1>Instructor Dashboard</h1>
            <Link to="/instructorclass"><button>Create a new class</button></Link>
            <p>Map out **mapped** list of created classes with the ability to edit or delete</p>
            
        </div>
    )
}

export default InstructorDashboard

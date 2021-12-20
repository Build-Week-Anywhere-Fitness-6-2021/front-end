import React from 'react'
import { useNavigate } from 'react-router-dom'
import InstructorHeader from './InstructorHeader'

const InstructorPunch = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/instructordashboard");
    }

    return (
        <div>
            <InstructorHeader />
            <form onSubmit={handleSubmit}>
                <label>Category
                    <select>
                        <option value="yoga">Yoga</option>
                        <option value="circuit">Circuit</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </label>
                <button>Create Punchpass</button>
            </form>
        </div>
    )
}

export default InstructorPunch

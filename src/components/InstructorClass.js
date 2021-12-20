import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const initialFormValues = [{
    name: "",
    type: null,
    start: null,
    duration: null,
    intensity: null,
    location: null,
    registered: 0,
    maxsize: null
}]
const InstructorClass = () => {
    const [state, setState] = useState(initialFormValues);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/instructordashboard");
    }

    const handleChange = (e) => {
        setState({value: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input 
                        type="text" 
                        value={state.name}
                        onChange={handleChange}
                        autoComplete="on"
                    />
                </label>
                <label>Type
                    <select value={state.type} onChange={handleChange}>
                        <option value="">Select a class type</option>
                        <option value="yoga">Yoga</option>
                        <option value="circuit">Circuit Training</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </label>
                {/* <label>Start time
                    <select>
                        <option value="yoga">Yoga</option>
                        <option value="circuit">Circuit Training</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </label>
                <label>Duration
                    <input />
                </label>
                <label>Intensity level
                    <input />
                </label>
                <label>Location
                    <input />
                </label>
                <label>Current number of registered attendees
                    <input />
                </label>
                <label>Max class size
                    <input />
                </label> */}
                <button type="submit">Create class</button>
            </form>
        </div>
    )
}

export default InstructorClass

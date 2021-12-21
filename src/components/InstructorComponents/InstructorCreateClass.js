import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const initialClassState = [{
    name: "",
    type: null,
    start: null,
    duration: null,
    intensity: null,
    location: null,
    registered: 0,
    maxsize: null
}]
const InstructorCreateClass = () => {
    const [state, setState] = useState(initialClassState);
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
                <label>Start time
                    <select value={state.start} onChange={handleChange}>
                        <option value="7:00a.m.">7:00 a.m.</option>
                        <option value="8:00a.m.">8:00 a.m.</option>
                        <option value="9:00a.m.">9:00 a.m.</option>
                    </select>
                </label>
                <label>Duration
                    <select value={state.duration} onChange={handleChange}>
                        <option value="30">30 minutes</option>
                        <option value="60">60 minutes</option>
                        <option value="90">90 minutes</option>
                    </select>
                </label>
                <label>Intensity level
                    <select value={state.intensity} onChange={handleChange}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>Location
                    <select value={state.location} onChange={handleChange}>
                        <option value="North">North</option>
                        <option value="South">South</option>
                    </select>
                </label>
                <label>Current number of registered attendees
                    {state.registered}
                </label>
                <label>Max class size
                    <select value={state.maxsize} onChange={handleChange}>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <button type="submit">Create class</button>
            </form>
        </div>
    )
}

export default InstructorCreateClass

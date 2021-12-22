import React from "react";
import "../../css/SearchClasses.css";

export default function ClassCard(props) {
    return (
                <div className="classCard">
                    <p>Class Name: {props.class.name}</p>
                    <p>Class Type: {props.class.type}</p>
                    <p>Start Time: {props.class.start}</p>
                    <p>Duration: {props.class.duration}</p>
                    <p>Intensity: {props.class.intensity}</p>
                    <p>Location: {props.class.location}</p>
                    <p>Class Capacity: {props.class.registered}/{props.class.maxsize}</p>
                    <button>Register for class</button>
                </div>
            )}
        





import React from "react";
import classList from ".././../data/data"
import "../../css/SearchClasses.css";


export default function ClassCard(props) {
    // const {searchResult} = props
    // console.log(searchResult)
    // const searchArray = classList.filter(c => c.name.toLowerCase().includes(searchResult))
    // if(!searchResult){
    //     return null
    // }
    // return (
    //     searchArray.map((c, i) => {
    //         if(c.registered < c.maxsize){  
    //             return (
    //             <div className="classCard">
    //                 <p>Class Name: {c.name}</p>
    //                 <p>Class Type: {c.type}</p>
    //                 <p>Start Time: {c.start}</p>
    //                 <p>Duration: {c.duration}</p>
    //                 <p>Intensity: {c.intensity}</p>
    //                 <p>Location: {c.location}</p>
    //                 <p>Class Capacity: {c.registered}/{c.maxsize}</p>
    //                 <button>Register for class</button>
    //             </div>
    //         )}
    //     })

    // )
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
        





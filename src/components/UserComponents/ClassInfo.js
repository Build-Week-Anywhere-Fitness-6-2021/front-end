import axios from "axios";
import React from "react";

export default function ClassInfo(props) {
  const { details} = props

  if (!details) {
    return <h3>Working fetching your class&apos; details...</h3>
  }

  const removeClass = () =>{
    //axios.delete("user.classes.endpoint", {classes: details});
    console.log(details);
  }
  

  return (
    <div className='class-container'>
      <h2>{details.name}</h2>
      <p><strong>Type:</strong> {details.type}</p>
	  <p><strong>Start Time:</strong> {details.start}</p>
	  <p><strong>Duration:</strong> {details.duration}</p>
	  <p><strong>Intensity Level:</strong> {details.intensity}</p>
	  <p><strong>Location:</strong> {details.location}</p>
	  <p><strong>Maximum Class Size:</strong> {details.maxsize}</p>
      <button onClick={removeClass}>Remove Class</button>
    </div>
  )
}
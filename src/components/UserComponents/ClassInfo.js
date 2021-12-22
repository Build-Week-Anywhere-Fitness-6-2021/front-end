import React, { useState } from "react";

export default function ClassInfo(props) {
  const { details } = props

  const [classDetails, setClassDetails] = useState({});

  if (!details) {
    return <h3>Working fetching your class&apos; details...</h3>
  }

  const removeClass = () =>{
    setClassDetails(details);
  }
  

  return (
    <div className='class-container'>
      <h2>{details.name}</h2>
      <p>Type: {details.type}</p>
	  <p>Start Time: {details.start}</p>
	  <p>Duration: {details.duration}</p>
	  <p>Intensity Level: {details.intensity}</p>
	  <p>Location: {details.location}</p>
	  <p>Maximum Class Size: {details.maxsize}</p>
      <button onClick={removeClass}>Remove Class</button>
    </div>
  )
}
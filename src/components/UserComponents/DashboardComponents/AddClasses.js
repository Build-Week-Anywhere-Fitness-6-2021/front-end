import {useState } from "react";
import ClassInfo from "../ClassInfo";

//Dummy Classes Data
const classes = [
  {
      name: "Fart Yoga",
      type: "yoga",
      start: "7:00 a.m.",
      duration: 30,
      intensity: "low",
      location: "north",
      registered: 1,
      maxsize: 4,
  },
  {
      name: "Cycle Sadness",
      type: "cycle",
      start: "9:00 a.m.",
      duration: 60,
      intensity: "high",
      location: "south",
      registered: 3,
      maxsize: 8
  },
  {
      name: "Boulder Crushing",
      type: "insanity",
      start: "11:00 a.m.",
      duration: 60,
      intensity: "high",
      location: "south",
      registered: 5,
      maxsize: 10
  },
]

const AddClasses = () => {

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="main-dash-content">
      {
        classes.map((classInfo, idx) =>{
          return (
            < ClassInfo key={idx} details={classInfo} />
          )
        })
      }
    </div>

);}

export default AddClasses;
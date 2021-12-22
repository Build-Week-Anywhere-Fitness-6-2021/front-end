import {useState } from "react";
import axios from 'axios';
import ClassInfo from "../ClassInfo";

//Dummy Classes Data
const classesData = [
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

  const [classes, setClasses] = useState([]);

  const getClasses = () => {
    axios.get('http://buddies.com/api/classes')
      .then(resp => {
        setClasses(resp.data);
      }).catch(err => console.error(err))
  }

  return (
    <div className="user-dash-content">
      {
        classesData.map((classInfo, idx) =>{
          return (
            < ClassInfo key={idx} details={classInfo} />
          )
        })
      }
    </div>

);}

export default AddClasses;
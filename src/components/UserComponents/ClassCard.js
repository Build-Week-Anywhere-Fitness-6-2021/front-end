import React from "react";
import classes from "../../data/data";
import "../../css/SearchClasses.css";


export default function ClassCard(props) {
    const {searchResult} = props
    const searchArray = classes.filter(c => c.name.toLowerCase().includes(searchResult))
    if(!searchResult){
        return null
    }
    return (
        searchArray.map((c, i) => {
            if(c.registered < c.maxsize){  return (
                <div className="classCard">
                    <p>{c.name}</p> <p>{c.type}</p> <p>{c.start}</p> <p>{c.duration}</p> <p>{c.intensity}</p> <p>{c.location}</p> <p>Class Capacity: {c.registered}/{c.maxsize}</p>

                </div>
            )}
        })

    )
}


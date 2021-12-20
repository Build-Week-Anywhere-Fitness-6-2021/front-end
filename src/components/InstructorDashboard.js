import React from "react";
import { Link } from "react-router-dom";
import InstructorHeader from "./InstructorHeader";

const InstructorDashboard = () => {
  return (
    <div>
      <InstructorHeader />
      <h1>Instructor Dashboard</h1>
      <Link to="/instructorclass">
        <button>Create a new class</button>
      </Link>
      <p>Map out list of created classes with the ability to edit or delete</p>
      <p>Map out a list of created punch passes</p>
      <Link to="/createpunchpass">
        <button>Click to create a new punchpass</button>
      </Link>
    </div>
  );
};

export default InstructorDashboard;

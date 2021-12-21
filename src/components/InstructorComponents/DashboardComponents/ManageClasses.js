import { useState } from "react";
import InstructorForm from "./Form";

import "../../../css/InstructorForm.css";

const ManageClasses = () => {
  const [selectedClass, setSelectedClass] = useState("");

  const handleClick = (e) => {
    const name = e.target.attributes.name.value;
    const value = e.target.attributes.value.value;

    setSelectedClass(value);
  };

  const handleBackButton = () => {
    setSelectedClass("");
  };

  return (
    <div className="main-dash-content">
      {selectedClass === "" ? (
        <>
          <h1>Manage Classes</h1>
          <p onClick={handleClick} name="addClass" value="add">
            Add Class
          </p>
          <p onClick={handleClick} name="editClass" value="edit">
            Edit Class
          </p>
          <p onClick={handleClick} name="deleteClass" value="delete">
            Delete Class
          </p>
        </>
      ) : null}

      {selectedClass ? (
        <>
          {selectedClass === "add" ? <InstructorForm name="Add" /> : null}
          {selectedClass === "edit" ? <InstructorForm name="Edit" /> : null}
          {selectedClass === "delete" ? <InstructorForm name="Delete" /> : null}
          <button onClick={handleBackButton}>Go Back</button>
        </>
      ) : null}
    </div>
  );
};

export default ManageClasses;

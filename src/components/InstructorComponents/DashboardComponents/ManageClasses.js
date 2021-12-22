import { useState } from "react";

import { connect } from "react-redux";

import AddForm from "./Forms/AddForm";
import ListOfClasses from "./ListOfClasses";

import "../../../css/InstructorForm.css";

const ManageClasses = (props) => {
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
          {selectedClass === "add" ? <AddForm /> : null}

          {selectedClass === "edit" ? (
            <>
              {props.numberOfClasses ? (
                <ListOfClasses selectedClass={selectedClass} />
              ) : (
                <p>No Classes To Select</p>
              )}
            </>
          ) : null}

          {selectedClass === "delete" ? (
            <>
              {props.numberOfClasses ? (
                <ListOfClasses selectedClass={selectedClass} />
              ) : (
                <p>No Classes To Select</p>
              )}
            </>
          ) : null}
          <button onClick={handleBackButton}>Go Back</button>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.instructorReducer.classes,
    numberOfClasses: state.instructorReducer.numberOfClasses,
  };
};

export default connect(mapStateToProps, {})(ManageClasses);

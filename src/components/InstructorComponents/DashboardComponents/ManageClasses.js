import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { createClass } from "../../../actions/InstructorActions";

import AddForm from "./Forms/AddForm";
import ListOfClasses from "./ListOfClasses";

import classList from "../../../data/data";

import "../../../css/InstructorForm.css";

import { nanoid } from "nanoid";

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

  //  Using dummy data provided in src
  useEffect(() => {
    classList.forEach((obj) => {
      props.createClass({ ...obj, id: nanoid(5) });
    });
  }, []);

  return (
    <div className="main-dash-content">
      {selectedClass === "" ? (
        <div id="manage-classes-div">
          <h1>Manage Classes</h1>
          {/* <hr></hr> */}
          <ul>
            <li onClick={handleClick} name="addClass" value="add">
              Add Class
            </li>
            <hr></hr>
            <li onClick={handleClick} name="editClass" value="edit">
              Edit Class
            </li>
            <hr></hr>
            <li onClick={handleClick} name="deleteClass" value="delete">
              Delete Class
            </li>
          </ul>
        </div>
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

export default connect(mapStateToProps, { createClass })(ManageClasses);

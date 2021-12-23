import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { createClass, editClass } from "../../../actions/InstructorActions";

import AddForm from "./Forms/AddForm";
import ListOfClasses from "./ListOfClasses";

import classList from "../../../data/data";

import "../../../css/MainDashboard.css";

import { nanoid } from "nanoid";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const ManageClasses = (props) => {
  const [selectedClass, setSelectedClass] = useState("");
  const [popup, setPopup] = useState(false);
  const [addedClassName, setAddedClassName] = useState("");
  const [editClassName, setEditClassName] = useState("");
  const [deleteClassName, setDeleteClassName] = useState("");

  const handleClick = (e) => {
    const name = e.target.attributes.name.value;
    const value = e.target.attributes.value.value;

    setSelectedClass(value);
  };

  //  Using dummy data provided in src
  useEffect(() => {
    classList.forEach((obj) => {
      props.createClass({ ...obj, id: nanoid(5) });
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPopup(false);
    }, 5000);
  }, [popup]);

  return (
    <div className="main-dash-content">
      {selectedClass === "" ? (
        <div className="main-dash-template">
          <header>
            <h1>Manage Classes</h1>
          </header>
          {/* <hr></hr> */}
          <ul>
            <li onClick={handleClick} name="addClass" value="add">
              Add Class
              <MdKeyboardArrowRight />
            </li>
            <hr></hr>
            <li onClick={handleClick} name="editClass" value="edit">
              Edit Class
              <MdKeyboardArrowRight />
            </li>
            <hr></hr>
            <li onClick={handleClick} name="deleteClass" value="delete">
              Delete Class
              <MdKeyboardArrowRight />
            </li>
          </ul>
        </div>
      ) : null}

      {selectedClass ? (
        <>
          {selectedClass === "add" ? (
            <AddForm
              setAddedClassName={setAddedClassName}
              setEditClassName={setEditClassName}
              setDeleteClassName={setDeleteClassName}
              setPopup={setPopup}
              setSelectedClass={setSelectedClass}
            />
          ) : null}

          {selectedClass === "edit" ? (
            <>
              {props.numberOfClasses ? (
                <ListOfClasses
                  setAddedClassName={setAddedClassName}
                  setEditClassName={setEditClassName}
                  setDeleteClassName={setDeleteClassName}
                  setPopup={setPopup}
                  setSelectedClass={setSelectedClass}
                  selectedClass={selectedClass}
                />
              ) : (
                <p>No Classes To Select</p>
              )}
            </>
          ) : null}

          {selectedClass === "delete" ? (
            <>
              {props.numberOfClasses ? (
                <ListOfClasses
                  setAddedClassName={setAddedClassName}
                  setEditClassName={setEditClassName}
                  setDeleteClassName={setDeleteClassName}
                  setPopup={setPopup}
                  setSelectedClass={setSelectedClass}
                  selectedClass={selectedClass}
                />
              ) : (
                <p>No Classes To Select</p>
              )}
            </>
          ) : null}
          {/* <button onClick={handleBackButton}>Go Back</button> */}
        </>
      ) : null}
      {popup ? (
        <span className="popup">
          <AiFillCheckCircle />
          {addedClassName ? <p>Class "{addedClassName}" Added.</p> : null}
          {editClassName ? <p>Class "{editClassName}" Edited.</p> : null}
          {deleteClassName ? <p>Class "{deleteClassName}" Deleted.</p> : null}
        </span>
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

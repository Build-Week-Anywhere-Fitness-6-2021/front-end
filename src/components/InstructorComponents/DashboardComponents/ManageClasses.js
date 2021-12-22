import { useEffect, useState } from "react";

import { connect } from "react-redux";

import AddForm from "./Forms/AddForm";
import EditForm from "./Forms/EditForm";
import DeleteForm from "./Forms/DeleteForm";
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
      {/* If selectedClass is falsey, render options to click */}
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

      {/* Is selectedClass truthy, check value of selectedClass */}
      {selectedClass ? (
        <>
          {/* If selectedClass === "add", render add form */}
          {selectedClass === "add" ? <AddForm /> : null}

          {/* If selectedClass === "edit", check if numberOfClasses is truthy (numberOfClasses > 0) */}
          {selectedClass === "edit" ? (
            <>
              {/*If so, render list of classes to select from. If not, render edit form  */}
              {props.numberOfClasses ? <ListOfClasses /> : <EditForm />}
            </>
          ) : null}

          {/* If selectedClass === "delete", check if numberOfClasses is truthy (numberOfClasses > 0) */}
          {selectedClass === "delete" ? (
            <>
              {/*If so, render list of classes to select from. If not, render delete form  */}
              {props.numberOfClasses ? <ListOfClasses /> : <DeleteForm />}
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
    classes: state.classes,
    numberOfClasses: state.numberOfClasses,
  };
};

export default connect(mapStateToProps, {})(ManageClasses);

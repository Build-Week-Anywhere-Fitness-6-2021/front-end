import React, { useState } from "react";
import { connect } from "react-redux";
import { createClass } from "../../../reducers/Actions/InstructorActions";

import "../../../css/InstructorForm.css";

const initialCredentials = {
  name: "",
  type: "",
  startTime: "",
  duration: "",
  intensityLevel: "",
  location: "",
  currentNumberOfClassSize: "",
  maxNumberOfClassSize: "",
};

const AddForm = (props) => {
  const { createClass } = props;

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createClass(credentials);
  };

  return (
    <div id="instructor-form-container">
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit} id="instructor-form">
        <label>
          Name:
          <input onChange={handleChange} name="name" />
        </label>
        <label>
          Type:
          <input onChange={handleChange} name="type" />
        </label>
        <label>
          Start Time:
          <input onChange={handleChange} name="startTime" />
        </label>
        <label>
          Duration:
          <input onChange={handleChange} name="duration" />
        </label>
        <label>
          Intensity Level:
          <input onChange={handleChange} name="intensityLevel" />
        </label>
        <label>
          Location:
          <input onChange={handleChange} name="location" />
        </label>
        <label>
          Current Number of Class Size:
          <p></p>
        </label>
        <label>
          Max Number of Class Size:
          <input onChange={handleChange} name="maxNumberOfClassSize" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    numberOfClasses: state.numberOfClasses,
  };
};

export default connect(mapStateToProps, { createClass })(AddForm);

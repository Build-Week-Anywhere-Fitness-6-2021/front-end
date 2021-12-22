import React, { useState } from "react";
import { connect } from "react-redux";
import { createClass } from "../../../../reducers/Actions/InstructorActions";

import "../../../../css/InstructorForm.css";
import { nanoid } from "nanoid";

const initialCredentials = {
  id: "",
  name: "Rough House",
  type: "Intense",
  startTime: "2 p.m.",
  duration: "1 hour",
  intensityLevel: "10",
  location: "Example Park",
  currentNumberOfClassSize: "",
  maxNumberOfClassSize: "20",
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
    // Sets unique ID
    createClass({ ...credentials, id: nanoid(5) });
  };

  return (
    <div id="instructor-form-container">
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit} id="instructor-form">
        <label>
          Name:
          <input onChange={handleChange} name="name" value={credentials.name} />
        </label>
        <label>
          Type:
          <input onChange={handleChange} name="type" value={credentials.type} />
        </label>
        <label>
          Start Time:
          <input
            onChange={handleChange}
            name="startTime"
            value={credentials.startTime}
          />
        </label>
        <label>
          Duration:
          <input
            onChange={handleChange}
            name="duration"
            value={credentials.duration}
          />
        </label>
        <label>
          Intensity Level:
          <input
            onChange={handleChange}
            name="intensityLevel"
            value={credentials.intensityLevel}
          />
        </label>
        <label>
          Location:
          <input
            onChange={handleChange}
            name="location"
            value={credentials.location}
          />
        </label>
        <label>
          Current Number of Class Size:
          <p></p>
        </label>
        <label>
          Max Number of Class Size:
          <input
            onChange={handleChange}
            name="maxNumberOfClassSize"
            value={credentials.maxNumberOfClassSize}
          />
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

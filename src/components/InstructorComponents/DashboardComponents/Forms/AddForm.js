import React, { useState } from "react";
import { connect } from "react-redux";
import { createClass } from "../../../../actions/InstructorActions";

import "../../../../css/InstructorForm.css";
import { nanoid } from "nanoid";

const initialCredentials = {
  id: "",
  name: "Rough House",
  type: "Intense",
  start: "2 p.m.",
  duration: 60,
  intensity: "10",
  location: "Example Park",
  registered: 10,
  maxsize: 20,
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
            name="start"
            value={credentials.start}
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
            name="intensity"
            value={credentials.intensity}
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
          Current Number Registered:
          <input
            onChange={handleChange}
            name="registered"
            value={credentials.registered}
          />
        </label>
        <label>
          Max Number of Class Size:
          <input
            onChange={handleChange}
            name="maxsize"
            value={credentials.maxsize}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    classes: state.instructorReducer.classes,
    numberOfClasses: state.instructorReducer.numberOfClasses,
  };
};

export default connect(mapStateToProps, { createClass })(AddForm);

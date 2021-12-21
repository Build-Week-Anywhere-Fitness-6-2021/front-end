import React, { useState } from "react";

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

const DeleteForm = (props) => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div id="instructor-form-container">
      <h2>Delete Class</h2>
      <form id="instructor-form">
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

export default DeleteForm;

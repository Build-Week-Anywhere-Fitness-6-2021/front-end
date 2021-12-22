import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editClass } from "../../../../actions/InstructorActions";

import "../../../../css/InstructorForm.css";

const initialCredentials = {
  id: "",
  name: "",
  type: "",
  startTime: "",
  duration: "",
  intensityLevel: "",
  location: "",
  currentNumberOfClassSize: "",
  maxNumberOfClassSize: "",
};

const EditForm = (props) => {
  const { cardData } = props;

  const [credentials, setCredentials] = useState(initialCredentials);

  useEffect(() => {
    setCredentials(cardData);
  }, []);

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
    props.editClass(credentials);
  };

  return (
    <div id="instructor-form-container">
      <h2>Edit Class</h2>
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

export default connect(null, { editClass })(EditForm);

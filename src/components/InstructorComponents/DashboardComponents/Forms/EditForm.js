import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editClass } from "../../../../actions/InstructorActions";

import "../../../../css/InstructorForm.css";

const initialCredentials = {
  id: "",
  name: "",
  type: "",
  start: 0,
  duration: "",
  intensity: "",
  location: "",
  registered: 0,
  maxsize: 0,
};

const EditForm = (props) => {
  const { cardData } = props;

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
    props.editClass(credentials);
  };

  useEffect(() => {
    setCredentials(cardData);
  }, []);

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

export default connect(null, { editClass })(EditForm);

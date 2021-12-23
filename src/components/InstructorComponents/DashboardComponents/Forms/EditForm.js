import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editClass } from "../../../../actions/InstructorActions";

import "../../../../css/MainDashboard.css";

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
  const {
    cardData,
    setSelectedClass,
    setPopup,
    setAddedClassName,
    setEditClassName,
    setDeleteClassName,
  } = props;

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
    setSelectedClass("");
    setPopup(true);
    setAddedClassName("");
    setEditClassName(credentials.name);
    setDeleteClassName("");
  };

  const handleBackButton = () => {
    setSelectedClass("");
  };

  useEffect(() => {
    setCredentials(cardData);
  }, []);

  return (
    <div className="main-dash-template">
      <header>
        <h1>Edit Class</h1>
        <div>
          <button
            form="edit-form"
            className="custom-button green"
            type="submit"
          >
            Submit
          </button>
          <button onClick={handleBackButton} className="custom-button orange">
            Go Back
          </button>
        </div>
      </header>
      <div className="dashboard-forms-container">
        <form
          onSubmit={handleSubmit}
          id="edit-form"
          className="dashboard-forms"
        >
          <label>
            Name:
            <input
              onChange={handleChange}
              name="name"
              value={credentials.name}
            />
          </label>
          <label>
            Type:
            <input
              onChange={handleChange}
              name="type"
              value={credentials.type}
            />
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
        </form>
      </div>
    </div>
  );
};

export default connect(null, { editClass })(EditForm);

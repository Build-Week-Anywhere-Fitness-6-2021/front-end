import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/ManagePasses.css";

const initialFormValues = {
  class1: false,
  class2: false,
  class3: false,
  class4: false,
};

const testUserArr = [
  {
    username: "Aaron Rodgers",
    category: "Cycling",
  },
  {
    username: "Tom Brady",
    category: "Yoga",
  },
  {
    username: "Russell Wilson",
    category: "Circuit",
  },
];

const ManagePasses = () => {
  const [punchPassFormValue, setPunchPassFormValue] =
    useState(initialFormValues);

  const changedInput = (name, value) => {
    setPunchPassFormValue({
      ...punchPassFormValue,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueNeeded = type === "checkbox" ? checked : value;
    changedInput(name, valueNeeded);
  };

  const cardsArr = testUserArr.map((user) => (
    <div className="user-card">
      <h4>{user.username}</h4>
      <h4>{user.category}</h4>
      <form>
        <label>
          <input
            type="checkbox"
            name="class1"
            onChange={onChange}
            value={punchPassFormValue.class1}
          />
          Class #1
        </label>
        <label>
          <input
            type="checkbox"
            name="class2"
            onChange={onChange}
            value={punchPassFormValue.class2}
          />
          Class #2
        </label>
        <label>
          <input
            type="checkbox"
            name="class3"
            onChange={onChange}
            value={punchPassFormValue.class3}
          />
          Class #3
        </label>
        <label>
          <input
            type="checkbox"
            name="class4"
            onChange={onChange}
            value={punchPassFormValue.class4}
          />
          Class #4
        </label>
      </form>
    </div>
  ));

  return (
    <div className="main-dash-content">
      <div className="main-dash-template">
        <header>
          <h1>Manage Passes</h1>
          <Link to="/createpunchpass">
            <div>
              <button className="custom-button orange">Add Punch Pass</button>
            </div>
          </Link>
        </header>
        <div className="users-container">
          <h3>Members with Punch Passes</h3>
          <hr></hr>
          <div className="user-cards">{cardsArr}</div>
        </div>
      </div>
    </div>
  );
};

export default ManagePasses;

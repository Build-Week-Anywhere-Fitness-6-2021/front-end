import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteClass } from "../../../../reducers/Actions/InstructorActions";

import "../../../../css/InstructorForm.css";

const DeleteForm = (props) => {
  console.log(props);

  const handleClick = (id) => {
    props.deleteClass(id);
  };

  return (
    <div id="delete-overlay">
      <div id="delete-notification">
        <p>Are you sure you want to delete {props.cardData.name}?</p>
        <button
          onClick={() => {
            handleClick(props.cardData.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default connect(null, { deleteClass })(DeleteForm);
import { connect } from "react-redux";
import { deleteClass } from "../../../../actions/InstructorActions";

import "../../../../css/MainDashboard.css";

const DeleteForm = (props) => {
  const handleClick = (id) => {
    props.deleteClass(id);
    props.setSelectedClass("");
    props.setPopup(true);
    props.setAddedClassName("");
    props.setEditClassName("");
    props.setDeleteClassName(props.cardData.name);
  };

  return (
    <div class="dashboard-forms-container">
      <form
        style={{ marginTop: "12.5%" }}
        onSubmit={() => {
          handleClick(props.cardData.id);
        }}
        className="dashboard-forms"
      >
        <p style={{ textAlign: "center" }}>
          Are you sure you want to delete {props.cardData.name}?
        </p>
        <button
          className="custom-button delete"
          style={{ width: "20%", margin: "auto", marginTop: "1rem" }}
          type="submit"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default connect(null, { deleteClass })(DeleteForm);

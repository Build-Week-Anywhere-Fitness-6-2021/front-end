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

  const handleBackButton = () => {
    props.setSelectedClass("");
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
        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Are you sure you want to delete {props.cardData.name}?
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          <button
            style={{ width: "50%", margin: "0 8%" }}
            onClick={handleBackButton}
            className="custom-button orange"
          >
            Go Back
          </button>

          <button
            style={{ width: "50%", margin: "0 8%" }}
            className="custom-button red"
            type="submit"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { deleteClass })(DeleteForm);

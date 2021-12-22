import React from "react";
import { useNavigate, Link } from "react-router-dom";
import InstructorHeader from "./InstructorHeader";
import "../../css/ManagePasses.css";

const InstructorPunch = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/instructordashboard/passes");
  };

  return (
    <div>
      <InstructorHeader />
      <div className="punchForm-container">
        <form onSubmit={handleSubmit}>
          <label>
            Punch Card Class Category
            <select>
              <option value="">--Select a Category--</option>
              <option value="yoga">Yoga</option>
              <option value="circuit">Circuit</option>
              <option value="cycling">Cycling</option>
            </select>
          </label>
          <button className="create-punchpass">Create Punch Pass</button>
          <Link to="/instructorDashboard/passes">
            <button className="cancel-punchpass">Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default InstructorPunch;

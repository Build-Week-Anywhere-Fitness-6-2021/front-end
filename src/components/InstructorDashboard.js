import React from "react";
import { Link } from "react-router-dom";
import InstructorHeader from "./InstructorHeader";

import "../css/InstructorDashboard.css";

const InstructorDashboard = () => {
  return (
    <div id="instructor-dash">
      <InstructorHeader />
      <h1>Instructor Dashboard</h1>

      <div id="instructor-dash-container">
        {/* <p>
          map of classes they are registered for with the ability to cancel and
          refund punch pass credit
        </p>
        <p>
          map of purchased punch passes that displays how many have been used
        </p>
        <Link to="/punchpass">
          <button>Click to buy punch passes</button>
        </Link> */}
        <nav>
          <ul>
            <li>Home</li>
            <div>
              <li>Manage Classes</li>
              <li>Manage Punch Passes</li>
            </div>
            <div>
              <li>Settings</li>
              <li>Logout</li>
            </div>
          </ul>
        </nav>
        <div id="instructor-dash-content">main container</div>
      </div>
    </div>
  );
};

export default InstructorDashboard;

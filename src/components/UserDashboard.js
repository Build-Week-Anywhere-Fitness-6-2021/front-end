import React from "react";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
import "../css/UserDashboard.css";

const UserDashboard = () => {
  return (
    <div id="user-dash">
      <UserHeader />
      <h1>Client Dashboard</h1>

      <div id="user-dash-container">
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
              <li>Classes</li>
              <li>Punch Passes</li>
            </div>
            <div>
              <li>Settings</li>
              <li>Logout</li>
            </div>
          </ul>
        </nav>
        <div id="user-dash-content">main container</div>
      </div>
    </div>
  );
};

export default UserDashboard;

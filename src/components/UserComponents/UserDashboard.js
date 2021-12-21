import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { RiSettings4Fill, RiLogoutBoxFill } from "react-icons/ri";

import UserHeader from "./UserHeader";
import "../../css/MainDashboard.css";

const UserDashboard = () => {
  return (
    <div className="main-dash">
      <UserHeader />
      <h1>Client Dashboard</h1>

      <div className="main-dash-container">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <AiFillHome />
                  <span>Home</span>
                </span>
              </Link>
            </li>
            <div className="li-wrapper">
              <li>
                <Link to="/userdashboard/classes">
                  <span>
                    <AiOutlinePlus />
                    <span>Add Classes</span>
                  </span>
                </Link>
              </li>
            </div>
            <div className="li-wrapper">
              <li>
                <Link to="/userdashboard/settings">
                  <span>
                    <RiSettings4Fill />
                    <span>Settings</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>
                    <RiLogoutBoxFill />
                    <span>Logout</span>
                  </span>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        {/* <div className="main-dash-content">main container</div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;

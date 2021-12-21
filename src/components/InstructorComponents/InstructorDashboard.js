import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import {
  RiPassportFill,
  RiSettings4Fill,
  RiLogoutBoxFill,
} from "react-icons/ri";

import InstructorHeader from "./InstructorHeader";
import "../../css/MainDashboard.css";

const InstructorDashboard = () => {
  return (
    <div className="main-dash">
      <InstructorHeader />
      <h1>Instructor Dashboard</h1>

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
                <Link to="/instructordashboard/classes">
                  <span>
                    <AiOutlinePlus />
                    <span>Manage Classes</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/instructordashboard/passes">
                  <span>
                    <RiPassportFill />
                    <span>Manage Passes</span>
                  </span>
                </Link>
              </li>
            </div>
            <div className="li-wrapper">
              <li>
                <Link to="/instructordashboard/settings">
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

export default InstructorDashboard;

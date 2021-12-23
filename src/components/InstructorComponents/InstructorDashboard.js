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
              <Link to="/instructordashboard">
                <span className="side-nav-icons">
                  <AiFillHome />
                  <span>Home</span>
                </span>
              </Link>
            </li>
            <div className="li-wrapper">
              <li>
                <Link to="/instructordashboard/classes">
                  <span className="side-nav-icons">
                    <AiOutlinePlus />
                    <span>Manage Classes</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/instructordashboard/passes">
                  <span className="side-nav-icons">
                    <RiPassportFill />
                    <span>Manage Passes</span>
                  </span>
                </Link>
              </li>
            </div>
            <div className="li-wrapper">
              <li>
                <Link to="/instructordashboard/settings">
                  <span className="side-nav-icons">
                    <RiSettings4Fill />
                    <span>Settings</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="side-nav-icons">
                    <RiLogoutBoxFill />
                    <span>Logout</span>
                  </span>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default InstructorDashboard;

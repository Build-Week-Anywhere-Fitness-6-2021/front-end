import { Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import SearchClasses from "./components/SearchClasses";
import Punchpass from "./components/Punchpass";

// User Components
import UserSignUp from "./components/UserComponents/UserSignUp";
import UserLogin from "./components/UserComponents/UserLogin";
import UserDashboard from "./components/UserComponents/UserDashboard";
import UserPrivateRoute from "./components/UserComponents/UserPrivateRoute";

// Instructor Components
import InstructorLogin from "./components/InstructorComponents/InstructorLogin";
import InstructorSignUp from "./components/InstructorComponents/InstructorSignUp";
import InstructorDashboard from "./components/InstructorComponents/InstructorDashboard";
import InstructorClass from "./components/InstructorComponents/InstructorClass";
import InstructorPunch from "./components/InstructorComponents/InstructorPunch";
import InstructorPrivateRoute from "./components/InstructorComponents/InstructorPrivateRoute";

// Instructor Dashboard Components
import ManageClasses from "./components/InstructorComponents/DashboardComponents/ManageClasses";
import ManagePasses from "./components/InstructorComponents/DashboardComponents/ManagePasses";
import InstructorSettings from "./components/InstructorComponents/DashboardComponents/Settings";

import AddClasses from "./components/UserComponents/DashboardComponents/AddClasses";
import UserSettings from "./components/UserComponents/DashboardComponents/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* User */}
        <Route exact path="/userlogin" element={<UserLogin />} />
        <Route exact path="/usersignup" element={<UserSignUp />} />
        <Route exact path="/searchclasses" element={<SearchClasses />} />
        <Route exact path="/userdashboard" element={<UserPrivateRoute />}>
          <Route exact path="/userdashboard" element={<UserDashboard />}>
            <Route exact path="classes" element={<AddClasses />} />
            <Route exact path="settings" element={<UserSettings />} />
          </Route>
        </Route>
        {/* Instructor */}
        <Route exact path="/instructorsignup" element={<InstructorSignUp />} />
        <Route exact path="/instructorlogin" element={<InstructorLogin />} />
        <Route
          exact
          path="/instructordashboard"
          element={<InstructorPrivateRoute />}
        >
          <Route
            exact
            path="/instructordashboard"
            element={<InstructorDashboard />}
          >
            <Route exact path="classes" element={<ManageClasses />} />
            <Route exact path="passes" element={<ManagePasses />} />
            <Route exact path="settings" element={<InstructorSettings />} />
          </Route>
        </Route>
        <Route
          exact
          path="/instructorclass"
          element={<InstructorPrivateRoute />}
        >
          <Route exact path="/instructorclass" element={<InstructorClass />} />
        </Route>
        <Route exact path="/punchpass" element={<UserPrivateRoute />}>
          <Route exact path="/punchpass" element={<Punchpass />} />
        </Route>
        <Route
          exact
          path="/createpunchpass"
          element={<InstructorPrivateRoute />}
        >
          <Route exact path="/createpunchpass" element={<InstructorPunch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

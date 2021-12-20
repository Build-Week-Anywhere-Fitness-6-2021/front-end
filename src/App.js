import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import UserSignUp from "./components/UserSignUp";
import UserLogin from "./components/UserLogin";
import InstructorLogin from "./components/InstructorLogin";
import InstructorSignUp from "./components/InstructorSignUp";
import SearchClasses from "./components/SearchClasses";
import InstructorDashboard from "./components/InstructorDashboard";
import InstructorClass from "./components/InstructorClass";
import UserDashboard from "./components/UserDashboard";
import Punchpass from "./components/Punchpass";
import InstructorPunch from "./components/InstructorPunch";
import InstructorPrivateRoute from "./components/InstructorPrivateRoute";
import UserPrivateRoute from "./components/UserPrivateRoute";



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
          <Route exact path="/userdashboard" element={<UserDashboard />} />
        </Route>
        <Route exact path="/punchpass" element={<UserPrivateRoute />}>
          <Route exact path="/punchpass" element={<Punchpass />} />
        </Route>
        {/* Instructor */}
        <Route exact path="/instructorsignup" element={<InstructorSignUp />} />
        <Route exact path="/instructorlogin" element={<InstructorLogin />} />
        <Route exact path="/instructordashboard" element={<InstructorPrivateRoute />}>
          <Route exact path="/instructordashboard" element={<InstructorDashboard />} />
        </Route>
        <Route exact path="/instructorclass" element={<InstructorPrivateRoute />}>
          <Route exact path="/instructorclass" element={<InstructorClass />} />
        </Route>
        <Route exact path="/createpunchpass" element={<InstructorPrivateRoute />}>
          <Route exact path="/createpunchpass" element={<InstructorPunch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import UserSignUp from "./components/UserSignUp";
import UserLogin from "./components/UserLogin";
import InstructorLogin from "./components/InstructorLogin";
import InstructorSignUp from "./components/InstructorSignUp";
import SearchClasses from "./components/SearchClasses";
import InstructorDashboard from "./components/InstructorDashboard";
import InstructorClass from "./components/InstructorClass";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/userlogin" element={<UserLogin />} />
        <Route exact path="/instructorlogin" element={<InstructorLogin />} />
        <Route exact path="/usersignup" element={<UserSignUp />} />
        <Route exact path="/instructorsignup" element={<InstructorSignUp />} />
        <Route exact path="/searchclasses" element={<SearchClasses />} />
        <Route exact path="/instructordashboard" element={<InstructorDashboard />} />
        <Route exact path="/instructorclass" element={<InstructorClass />} />
      </Routes>
    </div>
  );
}

export default App;

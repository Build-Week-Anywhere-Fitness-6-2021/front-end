import { Routes, Route, Link } from "react-router-dom";
import Landing from './components/Landing';
import SignUp from "./components/SignUp";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

import Home from "./assets/screens/Home";
import Login from "./assets/screens/Login";
import Signup from "./assets/screens/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
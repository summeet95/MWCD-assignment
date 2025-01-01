import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router, Routes, and Route
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Idea from "./Component/Idea";
import View from "./Component/View";
import ContactUs from "./Component/Contact";
import Manager from "./Component/Manager";
import MyIdea from "./Component/MyIdea";
import Employee from "./Component/Employee";
import AboutUs from "./Component/About";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the application with Router for routing */}
      <Routes>
        {" "}
        {/* Define routes */}
        <Route path="/register" element={<Register />} />{" "}
        {/* Route for Register page */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/submit-idea" element={<Idea />} /> {/* Correct usage */}
        <Route path="/view-idea" element={<View />} /> {/* Correct usage */}
        <Route path="/contact" element={<ContactUs />} /> {/* Correct usage */}
        <Route path="/manager" element={<Manager />} /> {/* Correct usage */}
        <Route path="/myidea" element={<MyIdea />} /> {/* Correct usage */}
        <Route path="/employee" element={<Employee />} /> {/* Correct usage */}
        <Route path="/about" element={<AboutUs />} /> {/* Correct usage */}
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Your homepage component
import PowerGenerator from "./components/PowerGenerator"; // Your power generator component
import FractionGenerator from "./components/FractionGenerator"; // Your fraction generator component
import Footer from './components/Footer'; // Import the Footer component
import MathAnimation from "./components/MathAnimation";
import './global.css';  // Make sure global.css is imported

const App = () => {
  return (
    <Router basename="/UFP_Generator"> {/* Set basename to the subpath */}
      <MathAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/power-generator" element={<PowerGenerator />} />
        <Route path="/fraction-generator" element={<FractionGenerator />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

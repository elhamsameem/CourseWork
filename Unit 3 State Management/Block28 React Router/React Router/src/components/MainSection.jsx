import React from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Violet from "./Violet";

function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="violet" element={<Violet />} />
      </Routes>
    </div>
  );
}

export default MainSection;

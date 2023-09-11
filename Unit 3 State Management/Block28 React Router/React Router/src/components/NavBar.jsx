import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/violet">Violet</Link>
    </div>
  );
}

export default NavBar;

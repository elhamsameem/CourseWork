import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/players" className="nav-link">
        All Players
      </NavLink>
      <NavLink to="/newPlayerForm" className="nav-link">
        Add New Player
      </NavLink>
    </div>
  );
}

export default NavBar;

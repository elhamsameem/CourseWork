import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-div">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/violet">Violet</Link>
    </div>
  );
}

export default Footer;

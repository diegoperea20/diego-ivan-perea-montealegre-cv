import React from "react";
import "./index.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h1 >Diego </h1>
      <div>
        <a  href="/">
          Home
        </a>
        <a  href="#Projects">
          Projects
        </a>
        <a  href="#Contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

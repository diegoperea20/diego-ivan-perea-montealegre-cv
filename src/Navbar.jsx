import React, { useState } from "react";
import "./index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>Diego</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="https://diegoperea20.github.io/diego-ivan-perea-montealegre-cv/">Home</a>
        <a href="#Projects">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#Contact">Contact</a>
        <a href="#Certificates">Certificates</a>
        
      </div>
    </nav>
  );
}

export default Navbar;

"use client"

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../app/styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Logo / Brand Name on the left */}
      <div className="navbar-brand">Portfolio</div>

      {/* Navbar Links (Visible on Desktop) */}
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-link">
          <a href="#hero">Home</a>
        </li>
        <li className="navbar-link">
          <a href="#about">About</a>
        </li>
        <li className="navbar-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-link">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navbar Links (Only visible when the menu is open) */}
      <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="menuLink">
          <a href="#hero" onClick={toggleMenu}>Home</a>
        </li>
        <li className="menuLink">
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>
        <li className="menuLink">
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </li>
        <li className="menuLink">
          <a href="#skills" onClick={toggleMenu}>Skills</a>
        </li>
        <li className="menuLink">
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-text">Mine Eryılmaz | Software Engineer</span>
                <span className="logo-text-mobile">Mine</span>
            </div>

            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`navbar-links ${isOpen ? "open show" : ""}`}>
                <li>
                    <a href="#about" onClick={closeMenu}>About</a>
                </li>
                <li>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
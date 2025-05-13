import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Hamburger menüsüne tıklandığında menüyü açıp kapatma
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-text">Mine Eryılmaz | Software Engineer</span>
                <span className="logo-text-mobile">Mine</span>
            </div>

            {/* Hamburger Menü */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Menü Linkleri */}
            <ul className={`navbar-links ${isOpen ? "open show" : ""}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

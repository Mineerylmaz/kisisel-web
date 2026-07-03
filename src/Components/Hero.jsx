
import React from "react";
import ModelViewer from "./ModelViewer";
import "./Hero.css";
const Hero = () => {
    return (
        <section className="hero-section">

            <div className="hero-text">
                <h1>Hi, I'm <span className="highlight">Mine</span></h1>
                <p>I’m learning and creating <br /> modern websites using React and web technologies.</p>
            </div>

            <div className="hero-model">
                <ModelViewer />
            </div>


            <a href="#about" className="mouse-scroll">
                <div className="mouse">
                    <div className="scroller"></div>
                </div>
            </a>

        </section>
    );
};

export default Hero;

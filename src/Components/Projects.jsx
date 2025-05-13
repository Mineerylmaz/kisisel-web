import React from "react";
import "./Project.css";

import hava from "../assets/hava.png";
import todo from "../assets/todo.png";
import hesap from "../assets/hesap.png";
import web from '../assets/webs.png';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Weather App",
            category: "Web App",
            image: hava,
            link: "https://github.com/Mineerylmaz/Weather-App"
        },
        {
            id: 2,
            title: "To-Do List",
            category: "Productivity",
            image: todo,
            link: "https://github.com/Mineerylmaz/TODOL-ST"
        },
        {
            id: 3,
            title: "Calculator",
            category: "Utility",
            image: hesap,
            link: "https://github.com/Mineerylmaz/Calculator"
        },
        {
            id: 4,
            title: "Personal Website",
            category: "Portfolio",
            image: web,
            link: "#"
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="section-heading">
                <p className="section-subtitle">My Work</p>
                <h2 className="section-title">Projects.</h2>
            </div>

            <div className="hero-section2">
                <div className="card2-grid">
                    {projectList.map((project) => (
                        <a key={project.id} className="card2" href={project.link} target="_blank" rel="noopener noreferrer">
                            <div
                                className="card2__background"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>
                            <div className="card2__content">
                                <p className="card2__category">{project.category}</p>
                                <h3 className="card2__heading">{project.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

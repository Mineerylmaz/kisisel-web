import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Timeline stilini içeri aktar

import "./About.css";
import web from "../assets/web.png";
import back from "../assets/backend.png";
import mbl from "../assets/mobile.png";
import uni from "../assets/image.png"

// Stil dosyası
const styles = {
    sectionSubText: "font-medium text-lg text-gray-500",  // Alt başlık stili
    sectionHeadText: "text-3xl font-bold text-white",  // Başlık stili
};

// Eğitim bilgileri
const experiences = [
    {
        title: "Bachelor's in Software Engineering",
        company_name: "Bandırma 17 Eylül Üniversitesi",
        date: "Sep 2021 - Present",
        iconBg: "linear-gradient(135deg, #E81CFF 0%, #8A2BE2 100%)",
        points: [
            "Focus on web development technologies",
            "Specialized in React, ASP.NET Core",

        ],
    },
    {
        title: "High School Diploma",
        company_name: "Suphi Koyucuoğlu Anadolu Lisesi",
        date: "2017 - 2021",
        iconBg: "linear-gradient(135deg, #40C9FF 0%, #007CF0 100%)",
        points: [
            "Graduated with honors",
            "1st place in regional math competition",
        ],
    },
];

// Motion animasyonu
const textVariant = () => ({
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
});

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{
                backgroundImage: experience.iconBg,
                color: "#fff"
            }}

            icon={
                <div className="flex justify-center items-center w-full h-full">

                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="intro">
                <h1 className="intro-h1">Overview</h1>
                <p className="intro-text">
                    As a 3rd year Software Engineering student, I focus on web development technologies like React, ASP.NET Core, and C# to build modern and scalable web applications.
                </p>
            </div>

            <div className="cards-container">
                <div className="card">
                    <img src={mbl} className="card-image" alt="React" />
                    <h2>React</h2>
                </div>
                <div className="card">
                    <img src={web} className="card-image" alt="Web Developer" />
                    <h2>Web Developer</h2>
                </div>
                <div className="card">
                    <img src={back} className="card-image" alt="Backend" />
                    <h2>Backend</h2>
                </div>
            </div>

            <div className="section-heading">
                <p className="section-subtitle">What I have done so far</p>
                <h2 className="section-title">Education.</h2>
            </div>


            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";
import web from "../assets/web.png";
import back from "../assets/backend.png";
import mbl from "../assets/mobile.png";
import uni from "../assets/image.png"


const styles = {
    sectionSubText: "font-medium text-lg text-gray-500",
    sectionHeadText: "text-3xl font-bold text-white",
};


const experiences = [
    {
        title: "Software Developer",
        company_name: "ZeroSoft",
        date: "Nov 2025 - Dec 2025",
        iconBg: "linear-gradient(135deg, #FF4ECD 0%, #8A2BE2 100%)",
        points: [
            "Designed and developed an end-to-end SaaS platform for dynamic QR code creation and real-time usage tracking.",
            "Integrated an analytics dashboard with dynamic charts to report campaign insights and link performance.",
        ],
    },
    {
        title: "AI Research Intern",
        company_name: "Kentkart",
        date: "Aug 2025 - Sep 2025",
        iconBg: "linear-gradient(135deg, #00F5A0 0%, #00D9F5 100%)",
        points: [
            "Conducted research on big data analysis and predictive AI models for smart transportation solutions.",
            "Analyzed the performance of machine learning and deep learning algorithms in real-world field applications.",
        ],
    },
    {
        title: "Full-Stack Developer Intern",
        company_name: "Kentkart",
        date: "Jul 2025 - Aug 2025",
        iconBg: "linear-gradient(135deg, #40C9FF 0%, #007CF0 100%)",
        points: [
            "Contributed to the architecture of scalable full-stack web and SaaS applications using React, Node.js, and MongoDB.",
            "Developed authentication, role-based access control, and admin dashboard modules.",
        ],
    },
    {
        title: "Full-Stack Software Developer",
        company_name: "BanuTech",
        date: "Nov 2024 - Feb 2025",
        iconBg: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
        points: [
            "Developed responsive, modern, and performance-oriented user interfaces for corporate web projects.",
            "Worked on front-end improvements focused on usability, visual consistency, and mobile compatibility.",
        ],
    },
    {
        title: "Bachelor's Degree in Software Engineering",
        company_name: "Bandırma Onyedi Eylül University",
        date: "Sep 2022 - Jun 2026",
        iconBg: "linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)",
        points: [
            "Graduated from the Department of Software Engineering with a GPA of 3.05/4.00.",
            "Focused on full-stack development, SaaS architectures, mobile applications, and database-driven systems.",
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
                    Software Engineering graduate with a focus on full-stack development, SaaS product development, and modern web and mobile applications. Experienced in building user-centered solutions using Flutter, React, and Node.js.

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

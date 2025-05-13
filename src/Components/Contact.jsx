import React, { useState } from "react";
import './Contact.css'
import StarsCanvas from "./canvas/Stars";
import EarthCanvas from "./canvas/Earth";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { slideIn } from "./utils/motion";


const Contact = () => {

    const [form, setForm] = useState({
        email: "",
        textarea: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (

        <div className="form-container" id="contact">
            <p className="intro2">Contact.</p>
            <StarsCanvas></StarsCanvas>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="mdl"
            >
                <EarthCanvas />
            </motion.div>

            <form
                className="form"
                action="https://formspree.io/f/xwpovyqq"
                method="POST"
            >
                <div className="form-group">
                    <label htmlFor="email">Company Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">How Can We Help You?</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="10"
                        placeholder="Write your message here..."
                        required
                    ></textarea>
                </div>

                <button className="form-submit-btn" type="submit">
                    Send
                </button>
            </form>


        </div>

    );
};

export default Contact;

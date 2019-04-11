import React from 'react';
import { Link } from 'react-router-dom';
import About2 from '../images/About2.jpg';
import Experience from '../components/Experience.js';
import Disclaimer from '../components/Disclaimer.js';

const About = () => {
    return (
        <div>
            <div className="mainbox1">
                <h1>Skills & Expertise</h1>
                <div>
                    <img src={About2} className="image1" alt="Handy Home Solutions, LLC" />
                    <p className="home">Thanks to a broad range of technical expertise and years of experience, Handy Home Solutions can help you with almost any household problem or project you may encounter. <Link className="textlink" to="/Services">Services</Link> are tailored to your specific needs and preferences, so when you choose Handy Home Solutions, your satisfaction is guaranteed!</p>
                </div>
            </div>
            <Experience />
            <div className="mainbox2">
                <div className="linkbox">
                    <Link className="mainlink" to="/Services">Our Services</Link>
                    <Link className="mainlink" to="/">Home</Link>
                    <Link className="mainlink" to="/Contact">Contact Us Now!</Link>
                </div>
                <Disclaimer />
            </div>
        </div>
    )
}

export default About;
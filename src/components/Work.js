import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div>
            <h1>Our Work</h1>          
            <div className="slideshow">
                Slideshow
            </div>      
            <div className="linkbox">
                <Link className="mainlink" to="/">Home</Link>
                <Link className="mainlink" to="/About">Skills & Expertise</Link>
                <Link className="mainlink" to="/Contact">Contact Us Now!</Link>
            </div>
        </div>
    )
}

export default Work;
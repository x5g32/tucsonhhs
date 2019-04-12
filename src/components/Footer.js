import React from 'react';
import { Link } from 'react-router-dom';
import CC2 from '../images/CC2.png';
import GHMark from '../images/GitHub-Mark-Light-32px.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footeraside">&nbsp;</div>
            <div className="footermain">
                <div className="footerbox1"><img className="CC2" src={CC2} alt="CC2" /></div>
                <div className="footerbox2">&copy; Handy Home Solutions, LLC<br />Tucson, AZ | <Link className="footerlink" to="/Contact">tucsonhhs@gmail.com</Link></div>
                <div className="footerbox3">
                    <Link className="footerlink" to="/">Home</Link> | <Link className="footerlink" to="/Services">Services</Link> | <Link className="footerlink" to="/About">Experience</Link> | <Link className="footerlink" to="/Contact">Contact</Link>
                    <br />
                    <a href="https://dev.to/x5g32" target="_blank" rel="noopener noreferrer">
                        <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV Profile" className="footericonlink" />
                    </a>
                    <a href="https://github.com/x5g32/tucsonhhs">
                        <img src={GHMark} alt="x5g32 GitHub" className="footericonlink" />
                    </a>
                </div>
            </div>
            <div className="footeraside">&nbsp;</div>
        </div>
    )
}

export default Footer;
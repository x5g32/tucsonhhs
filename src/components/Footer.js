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
                <div className="footerbox2">&copy; Handy Home Solutions, LLC<br /><Link className="footerlink" to="/Contact">tucsonhhs@gmail.com</Link></div>
                <div className="footerbox3">
                    <Link className="footerlink" to="/HandyHomeDesigns">Handy Home Designs</Link>
                    <br />
                    <Link className="footerlink" to="/">Home</Link> | <Link className="footerlink" to="/Services">Services</Link> | <Link className="footerlink" to="/Contact">Contact</Link>
                    <br />
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
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="contactinfo">
                <h1>Contact Us</h1>
                <table className="contact-table">
                    <tbody>
                        <tr>
                            <td className="contact-label">Andrew:</td>
                            <td>520-955-4343</td>
                        </tr>
                        <tr>
                            <td className="contact-label">Kevin:</td>
                            <td>520-954-6466</td>
                        </tr>
                        <tr>
                            <td className="contact-label">Email:</td>
                            <td>tucsonhhs@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
                <p className="call">* Available during normal business hours<br />Monday - Friday, 9:00 am to 5:00 pm.</p>
                
            </div>
            <div className="linkbox">
                    <Link className="mainlink" to="/Services">Our Services</Link>
                    <Link className="mainlink" to="/About">Skills & Expertise</Link>
                    <Link className="mainlink" to="/">Home</Link>
            </div>
        </div>
    )
}

export default Contact;
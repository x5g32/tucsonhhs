import React from 'react';
import { Link } from 'react-router-dom';
import HHDCustom1 from '../images/hhd/HHD-Custom1.png';
import HHDCustom2 from '../images/hhd/HHD-Custom2.png';
import HHDCustom3 from '../images/hhd/HHD-Custom3.png';
import HHDCustom4 from '../images/hhd/HHD-Custom4.png';

const Designs = () => {
    return (
        <div>
            <div className="mainbox1">
                <h2>Handy Home Designs</h2>
                <h3>Custom Furniture & Design</h3>
                <p className="home">Custom furniture hand crafted from raw materials, tailored with vision to your personal style and specifications.</p>
                <br />
                <hr />
                <br />
                <div className="HHD">
                    <img className="HHD1" src={HHDCustom1} alt="HHD-Custom1" />
                    <p className="hhdp">Bring out the rich colors and patterns in natural hardwoods with custom benches and tables for your home.</p>
                </div>
                <div className="HHD">
                    <img className="HHD2" src={HHDCustom2} alt="HHD-Custom2" />
                    <p className="hhdp">Each project is unique. Enhance the available space in your home with beautiful custom built furniture.</p>
                </div>
                <div className="HHD">
                    <img className="HHD3" src={HHDCustom3} alt="HHD-Custom3" />
                    <p className="hhdp">Create warm and comfortable living spaces that are functional and pleasing.</p>
                </div>
                <div className="HHD">
                    <img className="HHD4" src={HHDCustom4} alt="HHD-Custom4" />
                    <p className="hhdp">Metalworking allows projects to have great visual appeal as well as structural integrity. Pieces are built to last and remain functional for years to come.</p>
                </div>
                <p className="hhdp-center">
                    Do you prefer custom and unique pieces of furniture that enhance the comfort, look, and feel of your home? Then bring your ideas, plans, and questions to the experts at Handy Home Designs!<br />
                    <br />
                    We would be happy to discuss projects and possibilities in greater detail with you!
                </p>
            </div>
            <div className="mainbox2">
                <div className="linkbox">
                    <Link className="mainlink" to="/Services">Our Services</Link>
                    <Link className="mainlink" to="/Contact">Contact Us Now!</Link>
                </div>
            </div>
        </div>
    )
}

export default Designs;
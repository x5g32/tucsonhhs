import React from 'react';
import { Link } from 'react-router-dom';
import banner3 from '../images/banner3.png';
import Map from '../components/Map.js';
import ServicesHome from '../components/ServicesHome.js';

const Home = () => {
    return (
        <div>
            <div className="picbox"></div>
            <div className="mainbox1">
                <h1>Friendly Handyman Services</h1>
                <img src={banner3} className="image1" alt="Handy Home Solutions, LLC" />
                <p>Let the qualified professionals step in and take care of your home project to-do list! With friendly, courteous, quality service, Handy Home Solutions caters to a variety of household projects and repair jobs in the greater <Link className="textlink" to="/Map">Tucson area.</Link></p>
            </div>
            <div className="mainbox2">
                <ServicesHome />
                <div className="linkbox linkboxhome">
                    <Link className="mainlink" to="/Services">Our Services</Link>
                    <Link className="mainlink" to="/Background">Skills & Expertise</Link>
                </div>
            </div>
            <Map />
        </div>
    )
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Mapimage from '../images/map.png';

const Map = () => {
    return (
        <div>
            <div className="mapbox">
                <h1 className="maptitle">Serving Tucson & Surrounding Areas</h1>
                <img src={Mapimage} className="map" alt="map" />
                <Link className="contactlink highlight" to="/Contact">Contact Us Now For A Free Estimate!</Link>
            </div>
        </div>
    )
}

export default Map;
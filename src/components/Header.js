import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo" to="/">Handy Home Solutions, LLC</Link>
            <div className="infobox">
                <Link className="infolink" to="/Contact">Andrew: 520-955-4343</Link>
                <Link className="infolink" to="/Contact">Kevin: 520-954-6466</Link>
                <Link className="infolink" to="/Contact">tucsonhhs@gmail.com</Link>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo" to="/">Handy Home Solutions, LLC</Link>
            <div className="infobox">
                <p className="menulink">
                    --------<br />
                    --------<br />
                    --------
                </p>
            </div>
        </div>
    )
}

export default Header;
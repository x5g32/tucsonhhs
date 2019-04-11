import React from 'react';
import { Link } from 'react-router-dom';

import icon30 from '../images/icons/30.png';
import icon29 from '../images/icons/29.png';
import icon25 from '../images/icons/25.png';
import icon2 from '../images/icons/2.png';
import icon17 from '../images/icons/17.png';
import icon19 from '../images/icons/19.png';
import icon8 from '../images/icons/8.png';
import icon3 from '../images/icons/3.png';
import icon18 from '../images/icons/18.png';

const Services = () => {
    return (
        <div>
            <div className="servicesbox">
                <div className="listbox listboxhome1">
                    <div className="listitems">
                        <div className="listitem">
                            <img src={icon2} className="listicon" alt="icon" />
                            <div className="listcontent">Bathrooms</div>
                        </div>
                        <div className="listitem">
                            <img src={icon17} className="listicon" alt="icon" />
                            <div className="listcontent">Tile Showers</div>
                        </div>
                        <div className="listitem">
                            <img src={icon19} className="listicon" alt="icon" />
                            <div className="listcontent">Flooring</div>
                        </div>
                    </div>
                </div>
                <div className="listbox listboxhome2">
                    <div className="listitems">
                    <div className="listitem">
                            <img src={icon30} className="listicon" alt="icon" />
                            <div className="listcontent">Drywall Repair</div>
                        </div>
                        <div className="listitem">
                            <img src={icon29} className="listicon" alt="icon" />
                            <div className="listcontent">Texture & Paint</div>
                        </div>
                        <div className="listitem">
                            <img src={icon25} className="listicon" alt="icon" />
                            <div className="listcontent">Light Fixtures</div>
                        </div>
                    </div>
                </div>
                <div className="listbox listboxhome3">
                    <div className="listitems">
                        <div className="listitem">
                            <img src={icon8} className="listicon" alt="icon" />
                            <div className="listcontent">Kitchens</div>
                        </div>
                        <div className="listitem">
                            <img src={icon3} className="listicon" alt="icon" />
                            <div className="listcontent">Toilet Repair</div>
                        </div>
                        <div className="listitem">
                            <img src={icon18} className="listicon" alt="icon" />
                            <div className="listcontent"><Link className="textlink" to="/Services">And more...</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
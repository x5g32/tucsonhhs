import React from 'react';
import about1 from '../images/1.png';
import about3 from '../images/2.png';

const Experience = () => {
    return (
        <div className="mainbox1 aboutbg boxshadow">
        <h1 className="about-title">Experienced Professionals</h1>
            <div className="aboutbox">
                <div className="portraitbox">
                    <img src={about1} className="portrait" alt="Andrew" />
                </div>
                <div className="aboutcontent">
                    <p className="abouttext">I have over 10 years of experience in construction, beginning at age 10 building houses with my Dad and Uncle. Since then I have performed residential remodeling and maintenance, commercial steel construction, and landscaping. Some of my hobbies include woodworking, auto repair, and maintaining my house.</p>
                    <p className="abouttext bold">-Andrew</p>
                </div>
            </div>
            <div className="aboutbox">
                <div className="portraitbox">
                    <img src={about3} className="portrait" alt="Kevin" />
                </div>
                <div className="aboutcontent">
                    <p className="abouttext">My first experience in home improvement was through remodeling with my father. Today, I have nearly ten years of experience in residential remodeling and repair. Most recently, I have worked in maintenance as well as remodeling for rental homes across Tucson.</p>
                    <p className="abouttext bold">-Kevin</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;
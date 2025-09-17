import React from "react";
import myPfp from '../assets/mypfp.JPG';
import './Bio.css';

function Bio() {
    return (
        <div className="bio-page">
            <h2 style={{ color: "#F85ACA" }}>About Me</h2>
            <div>
                <img src={myPfp} alt="Nadia Pinos" className="profile-pic" style={{ width: "200px", borderRadius: "100px" }} />
                <p>
                    Hi! I'm Nadia Pinos, a fourth year Computer Science student at South Dakota State University. I have a passion for web development 
                    and I want to learn more about creating appealing user-friendly applications!!!
                </p>
                <p>
                    I have experience with C languages, HTML/CSS, React, and I love to take on challenges that push me to grow both 
                    personally and professionally. At my core, I'm a problem-solver and gravitate towards any creative outlet that catches my attention.
                </p>
                <p>
                    When I'm not working on assignments or at work, I enjoy spending time with friends and family, listening to music,
                    scowering the internet for scary movies(never ever deciding on one), and practicing my photography!
                </p>
            </div>
        </div>
);
}

export default Bio;
import React from "react";
import "./About.css";
const resume = require("../../assets/vaishaliRE.pdf");

const About = () => {
    return (
        <div className="container1">
            <div className="heading1">
                <h2>ABOUT ME2</h2>
            </div>
            <div className="about">
                <img className="profile" src={require("../../assets/profile.png")} alt=" vaishali" />
                <div className="para">
                    <p>
                        I am a Self-taught programmer with an aspiration to become a React Developer who holds an M.Tech degree in Electronics and Communication Engineering from NIT Kurukshetra, India. Creating and maintaining excellent websites and applications for the internet is what I dream of.
                        I've created various projects related to frontend applications using React.js, JavaScript, Redux, Material UI, CSS, HTML, Bootstrap and much more! I am passionate about improving my skills and learning new technologies.
                    </p>
                </div>

            </div>
            <a className="button1" href={resume} target="_blank" rel="noreferrer">View Resume</a>
        </div>
    )
}

export default About;
import React from "react";
import "./About.css";
const resume = require("../../assets/vaishaliRE.pdf");

const About = () => {
    return (
        <div className="container1">
            <div className="heading1">
                <h2>ABOUT ME</h2>
            </div>
            <div className="about">
                <img className="profile" src={require("../../assets/profile.png")} alt=" vaishali" />
                <div className="para">
                    <p>
                        I am a ReactJS Developer with an M.Tech degree in Electronics and Communication Engineering from NIT Kurukshetra, India. Creating and maintaining excellent websites and applications is what I dream of. I've created various projects related to Front End applications using React.Js, JavaScript, Redux toolkit and middlewares, Material UI, CSS3, HTML3, BootStrap, Tailwind CSS and much more! I am passionate about improving my skills and learning new technologies.
                    </p>
                </div>

            </div>
            <a className="button1" href={resume} target="_blank" rel="noreferrer">View Resume</a>
        </div>
    )
}

export default About;
import React from "react";
import "./About.css";

const About = () => {
    return (
       
        <div className="container1">
            <div className="heading1">
                <h2>ABOUT ME</h2>
            </div>
            <div className="about">
                <div className="self">
                <img className="profile" src={require("../../assets/profile.png")} alt=" vaishali" />
                <p>
                    I am a Self-taught programmer with an aspiration to become a React Developer who holds an M.Tech degree in Electronics and Communication Engineering from NIT Kurukshetra. Creating and maintaining excellent websites and applications for the internet is what I dream of. I am passionate about improving my skills and learning new technologies.
                    I've created projects using React.js, JavaScript, Redux, CSS, HTML, Node.js, Bootstrap and much more!
                </p>
                </div>
                <a className = "button1"  href="https://drive.google.com/file/d/1C8ukNCBkleHNWAzg4kO1IvMwOh53vraN/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
            </div>
        </div>
    )
}

export default About;
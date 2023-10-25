import React, { useEffect, useState, useRef } from "react";
import './HomePage.css';
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const github = require("../../assets/logo/github.png");
const react = require("../../assets/logo/react.png");
const js = require("../../assets/logo/js.png");
const redux = require("../../assets/logo/redux.png");
const mui = require("../../assets/logo/mui.png");
const css = require("../../assets/logo/css.png");
const html = require("../../assets/logo/html.png");
const bt = require("../../assets/logo/bootstrap.png");
const postman = require("../../assets/logo/postman.png");
const node = require("../../assets/logo/node.png");


const HomePage = () => {
  const [id, setId] = useState();

  const aboutRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    <h1 className='intro'> I am a React Developer.</h1>
    scrollToElement(id)
  }, [id])

  return (
    <div className="block">
      <div className="navi">
        <Navigation setId={setId} />
      </div>
      <div className="home-content">
      {/* <div className="skill-icon"> */}
          {/* </div> */}
        <div className="skill-icon">
          <div className="skill-box">
            <img className="skills" src={react} alt="" />
          </div>
          <div className="skill-box skill-la end bg-js">
            <img className="skills skills-small " src={js} alt="" />
          </div>
          <div className="skill-box skill-la">
            <img className="skills skills-small" src={css} alt="" />
          </div>
          <div className="skill-box end">
            <img className="skills" src={bt} alt="" />
          </div>
          <div className="skill-box">
            <img className="skills" src={node} alt="" />
          </div>

        </div>
        <div className='intro-div'>
          <h1 className='intro color'>Hi, my name is Vaishali. </h1>
          <h1 className='intro color'> I am a React Developer.</h1>
        </div>
        
        <div className="skill-icon">
          <div className="skill-box end">
            <img className="skills skills-small " src={redux} alt="" />
          </div>
          <div className="skill-box">
            <img className="skills skills-small" src={html} alt="" />
          </div>
          <div className="skill-box end">
            <img className="skills " src={github} alt="" />
          </div>
          <div className="skill-box">
            <img className="skills skills-small" src={mui} alt="" />
          </div>
          <div className="skill-box end bg-pm">
            <img className="skills " src={postman} alt="" />
          </div>
        </div>
        {/* <div className="skill-icon">
          </div> */}
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="project" ref={projectRef}>
        <Project />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;
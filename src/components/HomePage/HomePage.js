import React, { useEffect, useState, useRef } from "react";
import './HomePage.css';
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


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
    scrollToElement(id)
  }, [id])

  return (
    <div className="block">
      <div className="navi">
        <Navigation setId={setId} />
      </div>
      <div className='intro-div'>
        <h1 className='intro'>Hi, my name is Vaishali. </h1>
        <h1 className='intro'> I am a React Developer.</h1>
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
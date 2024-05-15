import React, { useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import About from "../components/About/About";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Timeline from "../components/timeline/timeline";
import { PulseLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Screen = ({ navDisplay, setNavDisplay }) => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [id, setId] = useState();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToElement(id);
  }, [id]);

  const location = useLocation();

  useEffect(() => {
    const mouseMoveFunc = throttle((e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 16);
    window.addEventListener("mousemove", mouseMoveFunc);
    setLoading(false);

    return () => {
      window.removeEventListener("mousemove", mouseMoveFunc);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      // height: 50,
      // width: 50,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => {
    setCursorVariant("default");
  };

  return (
    <main
      className="container"
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      {loading ? (
        <div className="loader-container">
          <PulseLoader color="#007bff" size={15} margin={5} />
        </div>
      ) : (
        <>
          <Navigation
            setId={setId}
            navDisplay={navDisplay}
            setNavDisplay={setNavDisplay}
          />

          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          ></motion.div>

          <Hero id="home" />
          <AnimatePresence mode="wait">
            <About id="about" location={location} key={location.key} />
          </AnimatePresence>
          <Skills />
          <Projects id="projects" />
          <Timeline
            workIcon={
              <img
                className="work-icon"
                src={require("../assets/logo/suitcase.png")}
                alt="work"
              />
            }
            eduIcon={
              <img
                className="work-icon"
                src={require("../assets/logo/book.png")}
                alt="education"
              />
            }
          />
          <Footer id="contact" />
        </>
      )}
    </main>
  );
};

export default Screen;

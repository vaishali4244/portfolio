import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const github = require("../../assets/logo/github.png");
const react = require("../../assets/logo/react.png");
const js = require("../../assets/logo/js.png");
const redux = require("../../assets/logo/redux.png");
// const mui = require("../../assets/logo/mui.png");
const css = require("../../assets/logo/css.png");
// const html = require("../../assets/logo/html.png");
const next = require("../../assets/logo/nextjs.png");
// const bt = require("../../assets/logo/bootstrap.png");
// const postman = require("../../assets/logo/postman.png");
// const node = require("../../assets/logo/node.png");

const Hero = ({ id }) => {
  return (
    <header id={id} className="hero-container">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0,
        }}
        className="hero-content"
      >
        <h1>
          I am <span id="name">Vaishali</span>.
        </h1>

        <motion.h2>
          I am a{" "}
          <Typewriter
            words={[
              "NextJs Developer .",
              "ReactJS Developer .",
              "React Native Developer .",
              "Fron End Developer .",
              "Web Developer .",
              "JavaScript Developer .",
              "MERN Stack Developer .",
            ]}
            loop={false}
            cursor
            typeSpeed={100}
            deleteSpeed={25}
            delaySpeed={450}
          />
        </motion.h2>
        <p>I develop user interfaces and web applications.</p>
      </motion.div>

      {/* <motion.img
        animate={{
          borderRadius: ["10%", "50%", "10%"],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="hero-img"
        src={aboutData?.avatar?.url}
        alt="profile "
      /> */}
      <div className="skill-icon">
        <div className="skill-box ">
          <img className="skills" src={react} alt="" />
        </div>
        <div className="skill-box  end ">
          <img className="skills " src={next} alt="" />
        </div>
        <div className="skill-box ">
          <img className="skills skills-small" src={js} alt="" />
        </div>
        <div className="skill-box end">
          <img className="skills" src={css} alt="" />
        </div>
        <div className="skill-box ">
          <img className="skills " src={redux} alt="" />
        </div>
        {/* <div className="skill-box">
            <img className="skills" src={bt} alt="" />
          </div> */}
        {/* <div className="skill-box">
            <img className="skills " src={mui} alt="" />
          </div> */}

        <div className="skill-box end">
          <img className="skills " src={github} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Hero;

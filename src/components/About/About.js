import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const resume = require("../../assets/vaishaliRE.pdf");

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const About = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="about-container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="about-heading">ABOUT ME</h3>
      <div className="about-content">
        <motion.img
         animate={{
          borderRadius: ["10%", "50%", "10%"],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
         
          className="about-img "
          src={require('../../assets/images/profile2.jpeg')}
          alt="profile "
        />

        <div className="about-details">
          <motion.p
            initial={{ scale: 0.1 }}
            animate={{
              scale: [1],
            }}
            transition={{
              duration: 5,
              // repeat: Infinity,
            }}
          >
            I am a React.JS Developer with an M.Tech degree in Electronics and Communication Engineering from NIT Kurukshetra, India. I have 7 months of internship experience in Web Development and am currently learning Next.JS to expand my expertise. I've created various projects related to Front End applications using React.Js, JavaScript, TypeScript, Redux toolkit and middlewares, Material UI, Tailwind CSS, BootStrap, CSS3, Sass, HTML5, and much more! I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.
          </motion.p>

          <div className="more-details">
            <p>
              Name : <span className="about-me">Vaishali</span>
            </p>
            <p>
              Email :{" "}
              <span className="about-me">vaishali120895@gmail.com</span>
            </p>
            <motion.p
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              Address : <span className="about-me">Noida, India</span>
            </motion.p>
            {/* <p>
              Quote : <span className="about-me">Live the Life as you want</span>{" "}
            </p> */}
          </div>
        <a className="container-btn" href={resume} target="_blank" rel="noreferrer">View Resume</a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

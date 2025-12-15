import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const resume = require("../../assets/vaishaliRresume.pdf");

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
          src={require("../../assets/images/profile2.jpeg")}
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
            I’m a React.js Developer with 3+ years of hands-on experience
            building scalable and responsive web applications using modern
            technologies like React.js, Next.js, JavaScript, Redux Toolkit,
            Zustand, TypeScript, and Tailwind CSS. I hold an M.Tech in
            Electronics and Communication Engineering from NIT Kurukshetra,
            India.
          </motion.p>
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
            {" "}
            I’ve worked on diverse projects—from travel planning platforms to
            admin dashboards and e-commerce tools—focusing on performance,
            intuitive UI, and seamless user experiences. I’m experienced in
            integrating real-time features, payment gateways (Razorpay), JWT
            authentication, and state management solutions.{" "}
          </motion.p>
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
            {" "}
            Currently expanding my expertise in full-stack development and
            passionate about solving real-world problems with clean, efficient,
            and maintainable code. I thrive in agile teams, collaborate
            effectively, and stay up to date with emerging frontend trends.
          </motion.p>

          <div className="more-details">
            <p>
              Name : <span className="about-me">Vaishali</span>
            </p>
            <p>
              Email : <span className="about-me">vaishali120895@gmail.com</span>
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
          <a
            className="container-btn"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

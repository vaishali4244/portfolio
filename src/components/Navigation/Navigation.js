import React from "react";
import "./Navigation.css";

import { motion } from "framer-motion";

const Navigation = (props) => {

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.7,
      }}
      className="nav-container"
    >
      <motion.ul
        className="nav-content"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0,
          delay: 1.2,
          type: "spring",
          stiffness: 200,
        }}
      >
        <motion.li
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 8px white ",
          }}
        >
          <p onClick={() => props.setId("home")}>Home</p>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 8px white ",
          }}
        >
          <p onClick={() => props.setId("about")}>About</p>
        </motion.li>

        <motion.li
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 8px white ",
          }}
        >
          <p onClick={() => props.setId("projects")}>Projects</p>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 8px white ",
          }}
          className="contact"
        >
          <p onClick={() => props.setId("contact")}>Contact</p>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navigation;

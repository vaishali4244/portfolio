import React from "react";
import GmailLink from './GmailLink';
import { motion } from "framer-motion";
import './Contact.css';

const Contact = () => {
  return (
       
        <div className="social-links">
          <motion.button
             whileHover={{
              scale: 1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }} className="gimage " rel="noreferrer" target="_blank"><GmailLink />
          </motion.button>
          <motion.a
             whileHover={{
              scale: 1.2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          className="limage link" rel="noreferrer" href="https://www.linkedin.com/in/vaishali-react12/" target="_blank">
          </motion.a>
          <motion.a 
           whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="gitimage link" rel="noreferrer" href="https://github.com/vaishali4244" target="_blank">
          </motion.a>
        </div>

  )
}

export default Contact;
import React from "react";
import "./Footer.css";
import Contact from "../Contact/Contact";

const Footer = ({ id }) => {
  return (
    <div className="contact-container">
      <section id={id} className="contact-box">
        <h3 className="about-heading">Get in Touch</h3>
        <div className="contact-content">
          <div className="contact-p">
            <p>
           Seeking roles in modern web development where I can apply my 3 years of ReactJS/Next.js experience to build scalable, performant applications and grow as a software engineer.

            </p>
          </div>

          <div className="contact-data">
            <div className="contact-info">
              <img src={require("../../assets/logo/address.png")} alt="" />
              <p>Noida, India</p>
            </div>
            <div className="contact-info">
              <img src={require("../../assets/logo/email.png")} alt="" />
              <p>vaishali120895@gmail.com</p>
            </div>

            <Contact />
          </div>
        </div>
      </section>
      <a rel="noreferrer" href="#top" className="upArrow"> </a>
      <footer className="footer-container">
        <p>Copyright &copy; 2024. All rights reserved.</p>
        <p>
          {" "}
          Developed by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/vaishali-react12/"
            target="_blank"
          > Vaishali</a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Footer;

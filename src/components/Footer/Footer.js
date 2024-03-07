import React from "react";
import GmailLink from './GmailLink';
import './Footer.css';

const Footer = () => {
  return (

    <footer className="footer ">
      <div className="container5">
        <a rel="noreferrer" href="#top" className="upArrow">
        </a>
        <div className="social-links">
          <button className="gimage link" rel="noreferrer" target="_blank"><GmailLink />
          </button>
          <a className="limage link" rel="noreferrer" href="https://www.linkedin.com/in/vaishali-singh-a31b9231/" target="_blank">
          </a>
          <a className="gitimage link" rel="noreferrer" href="https://github.com/vaishali4244" target="_blank">
          </a>
        </div>

      </div>
      <div className="copy">
        <p className="text">
          ©2023 - Developed by
          <a rel="noreferrer" href="https://www.linkedin.com/in/vaishali-singh-a31b9231/" target="_blank"
          > Vaishali</a>
        </p>
      </div>

    </footer>

  )
}

export default Footer;
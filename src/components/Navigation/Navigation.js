import React from "react";
import './Navigation.css';

const Navigation = (props) => {
  return (

    <header className="navbar">

      <div className="nav" onClick={() => props.setId("about")}>About Me</div>
      <div className="nav" onClick={() => props.setId("project")}>Projects</div>
      <div className="nav" onClick={() => props.setId("contact")}>Contact</div>

    </header>

  )
}

export default Navigation;
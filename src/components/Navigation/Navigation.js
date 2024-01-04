import React from "react";
import { useNavigate } from "react-router-dom";
import './Navigation.css';

const Navigation = (props) => {

  const navigate = useNavigate();
  const goToProjectPage = () => {
    navigate('/projects');
  };

  return (

    <header className="navbar">

      <div className="nav" onClick={() => props.setId("about")}>About Me</div>
      <div className="nav" onClick={goToProjectPage}>Projects</div>
      {/* <div className="nav" onClick={() => props.setId("project")}>Projects</div> */}
      <div className="nav" onClick={() => props.setId("contact")}>Contact</div>
    </header>
  )
}

export default Navigation;
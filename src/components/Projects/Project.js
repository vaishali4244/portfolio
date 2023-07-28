import React from "react";
import "./Project.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const kittyTalk = require("../../assets/kittyTalk.png");

const Project = () => {
  return (
    <div className="container3">
      <h2 className="heading3">MY PROJECTS </h2>
      <div className="content3">
        <div className=" card box3" >
          <img src={require("../../assets/face-detector.png")} className="anim" alt="face detection preview" />
          <div className="card-body  ">
            <h4 className="card-font3 ">Face-Detection App: Caught-U</h4>
            <p >Skills used: <span>React.js, Node.js, PostgreSQL, CSS, HTML, Postman, Bootstrap</span></p>
            <a href="https://vaishali4244.github.io/face-recognizer/" className="button3  " target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/face-recognizer" className="button3  " target="_blank" rel="noreferrer">Frontend Code</a>
            <a href="https://github.com/vaishali4244/face_detector_backend" className="button3 " target="_blank" rel="noreferrer">Backend Code</a>
          </div>
        </div>

        <div className="card box3" >
          <img src={require("../../assets/news.png")} className="anim" alt="..." />
          <div className="card-body ">
            <h4 className="card-font3">News Of World : News-App</h4>
            <p >Skills used: <span>React.Js, Javascript, CSS, BootStrap, HTML, VS code </span></p>
            <a href="https://github.com/vaishali4244/News-app" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        
        <div className="card box3" >
          <img src={require("../../assets/fashionStore.png")} className="anim" alt="Fashion Store website" />
          <div className="card-body fashion ">
            <h4 className="card-font3">Fashion Store</h4>
            <p >Skills used: <span>React.js, CSS, HTML </span></p>
            <a href="https://vastram.netlify.app/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/fashion_store_vastram" className="button3 " target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        <div className="card box3" >
          <img src={kittyTalk} className="anim" alt="kittyTalk website preview" />
          <div className="card-body ">
            <h4 className="card-font3">Kitty Talk- For Cat Lovers</h4>
            <p >Skills used: <span>React.js, Redux, CSS, HTML </span></p>
            <a href="https://kittytalk.netlify.app/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/kittyTalk-project" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        <div className="card  box3" >
          <img src={require("../../assets/foodHunt.png")} className="anim" alt="Food Hunt Game" />
          <div className="card-body ">
            <h4 className="card-font3">Food Hunt Game</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML </span></p>
            {/* <a href="https://vaishali4244.github.io/food_hunt/foodhunt.html" className="button3" target="_blank" rel="noreferrer">Go Live</a> */}
            <a href="https://github.com/vaishali4244/food_hunt" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
       
        {/* <div className="card box3" >
          <img src={require("../../assets/Rlogin.png")} className="anim" alt="..." />
          <div className="card-body ">
            <h4 className="card-font3">Responsive Login</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML </span></p>
            <a href="https://vaishali4244.github.io/Responsive-Login/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/Responsive-Login" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div> */}

        <div className="card  box3" >
          <img src={require("../../assets/ttt.png")} className="anim" alt="ticTacToe Game" />
          <div className="card-body ">
            <h4 className="card-font3">Tic-Tac-Toe Game</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML </span></p>
            <a href="https://vaishali4244.github.io/MyTicTacToe/tic%20tac%20toe.html" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/MyTicTacToe" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="card box3" >
          <img src={require("../../assets/bg.png")} className="anim" alt="Gradient Generator" />
          <div className="card-body ">
            <h4 className="card-font3">Background Gradient Generator</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML </span></p>
            <a href="https://vaishali4244.github.io/bg-generator/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/bg-generator" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        <div className="card  box3" >
          <img src={require("../../assets/clock.png")} className="anim" alt="..." />
          <div className="card-body ">
            <h4 className="card-font3">Analog Clock</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML </span></p>
            <a href="https://vaishali4244.github.io/analog-clock/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/analog-clock" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Project;
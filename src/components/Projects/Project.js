import React from "react";
import "./Project.css";
const editor = require("../../assets/codeEditor.PNG");
const tictac = require("../../assets/tictac.png");
const kittyTalk = require("../../assets/kittyTalk.png");

const Project = () => {
  return (
    <div className="container3">
      <h2 className="heading3">MY PROJECTS </h2>
      <div className="content3">
      <div className="card box3" >
          <img src={editor} className="anim" alt="code editor preview" />
          <div className="card-body ">
            <h4 className="card-font3">Code Editor - HTML, CSS, JS</h4>
            <p >Skills used: <span>React.Js, JavaScript, CSS, HTML, Material UI, Local Storage, Context API </span></p>
            <a href="https://codechecker.netlify.app/" className="button3  " target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/code-editor" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        
        <div className=" card box3" >
          <img src={require("../../assets/face-detector.png")} className="anim" alt="face detection preview" />
          <div className="card-body  ">
            <h4 className="card-font3 ">Face-Detection App: Caught-U</h4>
            <p >Skills used: <span>React.js, JavaScript, Node.js, PostgreSQL, CSS, HTML, Postman, Bootstrap</span></p>
            <a href="https://vaishali4244.github.io/face-recognizer/" className="button3  " target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/face-recognizer" className="button3  " target="_blank" rel="noreferrer">Frontend Code</a>
            <a href="https://github.com/vaishali4244/face_detector_backend" className="button3 " target="_blank" rel="noreferrer">Backend Code</a>
          </div>
        </div>
        
        <div className="card box3" >
          <img src={require("../../assets/news.png")} className="anim" alt="News Bulletin App preview" />
          <div className="card-body ">
            <h4 className="card-font3">News Of World : News-App</h4>
            <p >Skills used: <span>React.Js, JavaScript, CSS, BootStrap, HTML, VS code, Git </span></p>
            <a href="https://github.com/vaishali4244/News-app" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="card box3" >
          <img src={require("../../assets/fashionStore.png")} className="anim" alt="Fashion Store website" />
          <div className="card-body fashion ">
            <h4 className="card-font3">Fashion Store</h4>
            <p >Skills used: <span>React.js, JavaScript, CSS, HTML </span></p>
            <a href="https://vastram.netlify.app/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/fashion_store_vastram" className="button3 " target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="card box3" >
          <img src={tictac} className="anim" alt="tictactoe website preview" />
          <div className="card-body ">
            <h4 className="card-font3">Tic-Tac-Toe (React)</h4>
            <p >Skills used: <span>React.js, JavaScript, Redux, CSS, HTML, Local Storage, Git </span></p>
            <a href="https://redbluered.netlify.app/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/react-tictactoe" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="card box3" >
          <img src={kittyTalk} className="anim" alt="kittyTalk website preview" />
          <div className="card-body ">
            <h4 className="card-font3">Kitty Talk- For Cat Lovers</h4>
            <p >Skills used: <span>React.js, JavaScript, Redux, CSS, HTML, Git </span></p>
            <a href="https://kittytalk.netlify.app/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/kittyTalk-project" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        <div className="card  box3" >
          <img src={require("../../assets/cake-shop.png")} className="anim" alt="Food Hunt Game" />
          <div className="card-body ">
            <h4 className="card-font3">Bakery Shop Website</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML, Git </span></p>
            <a href="https://vaishali4244.github.io/cake-shop-website/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/cake-shop-website" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="card  box3" >
          <img src={require("../../assets/foodHunt.png")} className="anim" alt="Food Hunt Game" />
          <div className="card-body ">
            <h4 className="card-font3">Food Hunt Game</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML, Git </span></p>
            <a href="https://vaishali4244.github.io/food_hunt/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/food_hunt" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
 <div className="card box3" >
          <img src={require("../../assets/Rlogin.png")} className="anim" alt="..." />
          <div className="card-body ">
            <h4 className="card-font3">Responsive Login</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML </span></p>
            <a href="https://vaishali4244.github.io/Responsive-Login/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/Responsive-Login" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div> 

        <div className="card  box3" >
          <img src={require("../../assets/ttt.png")} className="anim" alt="ticTacToe Game" />
          <div className="card-body ">
            <h4 className="card-font3">Tic-Tac-Toe Game</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML, Git </span></p>
            <a href="https://vaishali4244.github.io/MyTicTacToe/tic%20tac%20toe.html" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/MyTicTacToe" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="card box3" >
          <img src={require("../../assets/bg.png")} className="anim" alt="Gradient Generator" />
          <div className="card-body ">
            <h4 className="card-font3">Background Gradient Generator</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML, Git </span></p>
            <a href="https://vaishali4244.github.io/bg-generator/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/bg-generator" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
        <div className="card  box3" >
          <img src={require("../../assets/clock.png")} className="anim" alt="..." />
          <div className="card-body ">
            <h4 className="card-font3">Analog Clock</h4>
            <p >Skills used: <span>JavaScript, CSS, HTML, Git </span></p>
            <a href="https://vaishali4244.github.io/analog-clock/" className="button3" target="_blank" rel="noreferrer">Go Live</a>
            <a href="https://github.com/vaishali4244/analog-clock" className="button3" target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Project;
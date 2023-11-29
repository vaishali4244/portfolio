import React from "react";
import "./Project.css";
import { data } from "../data";

const Project = () => {
  return (
    <div className="container3">

      <h2 className="heading3">MY PROJECTS </h2>

      <div className="content3">
        {data?.map((item, idx) => {
          return (
            <div key={idx} className="card" >
              <img src={item?.source} className="anim" alt={item?.alt} />
              <div className="card-body ">
                <h4 className="card-font3">{item?.title}</h4>
                <p >Skills used: <span>{item?.span}</span></p>
                <div className="button3-main">
                  {item?.live ?
                    <a href={item?.live} className="button3" target="_blank" rel="noreferrer">Go Live</a>
                    : null}
                  {item?.code &&
                    <a href={item?.code} className="button3" target="_blank" rel="noreferrer">{item?.frontend ? item?.frontend : "Code"}</a>
                  }
                  {item?.bcode ?
                    <a href={item?.bcode} className="button3" target="_blank" rel="noreferrer">Backend Code</a>
                    : null}
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </div>

  )
}
export default Project;
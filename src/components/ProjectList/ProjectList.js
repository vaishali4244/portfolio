import React from "react";
import "./ProjectList.css";
import { data } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container3">

      <h2 className="heading3">MY PROJECTS </h2>

      <div className="content3">
        <Slider {...settings}>
          {data?.map((item, idx) => {
            return (
              <div key={idx} className="card" >
                <img src={item?.source} className="pro-img2" alt={item?.alt} />
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
        </Slider>
      </div>

    </div>

  )
}
export default ProjectList;
import React from "react";
import "../components/ProjectList/ProjectList.css"
import { data } from "../components/data";
import { useNavigate } from "react-router-dom";

const ProjectPage = (props) => {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        navigate('/');
    };
    return (
        <>
        <div className="navi">
            <header className="navbar">
                <div className="nav" onClick={goToAboutPage}>About Me</div>
            </header>
        </div>
            <div className="container3">

                <h2 className="heading3">MY PROJECTS </h2>

                <div className="pro-content">
                    {data?.map((item, idx) => {
                        return (
                            <div key={idx} className="pro-card" >
                                <img src={item?.source} className="pro-img" alt={item?.alt} />
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
        </>

    )
}
export default ProjectPage;
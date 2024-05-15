
import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { data } from "../data";
import "./projects.css";

const Projects = ({ id,}) => {
  const [projectData, setProjectData] = useState([data]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [ search, setSearch ]= useState('')

  useEffect(() => {
    if (search?.length === 0) {
      setProjectData(data);
        } else {
          const filteredData = data.filter((item) => {
           if(item?.skills?.toString()?.toLowerCase()?.includes(search)){
              return item
            }
            return item
            });
          setProjectData(filteredData);
        }
      }, [search])
    

  const onOpenModal = (item) => {
    setSelectedProject(item);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section id={id} className="project-container">
      <h3 className="about-heading">Projects</h3>
      <input
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        placeholder="Search by skills"
      />
      <article className="content">
        {projectData?.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => onOpenModal(item)}
                className="project-card"
              >
                <h4 className="title">{item?.title}</h4>
                <img
                  className="project-img"
                  src={item?.source}
                  alt="project"
                />
                <p>Skills : <span className="skills-name">{item?.skills?.join(", ")}</span></p>
              </div>
            );
          })}
      </article>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        {selectedProject && (
          <div className="modal-card">
            <h4 className="title"> {selectedProject.title}</h4>
            <img
              className="modal-img"
              src={selectedProject.source}
              alt="project"
            />
            <p>
              Skills :
              <span className="skills-name">
                {" "}
                {selectedProject.skills?.join(", ")}
              </span>
            </p>
            <div className="button3-main">
                    {selectedProject?.live ?
                      <a href={selectedProject?.live} className="project-btn" target="_blank" rel="noreferrer">Go Live</a>
                      : null}
                    {selectedProject?.code &&
                      <a href={selectedProject?.code} className="project-btn" target="_blank" rel="noreferrer">{selectedProject?.frontend ? selectedProject?.frontend : "Code"}</a>
                    }
                    {selectedProject?.bcode ?
                      <a href={selectedProject?.bcode} className="button3" target="_blank" rel="noreferrer">Backend Code</a>
                      : null}
                  </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;

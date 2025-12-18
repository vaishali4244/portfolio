import React, { useState } from "react";
import "./timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const Timeline = ({ workIcon, eduIcon }) => {
  const [expVisible, setExpVisible] = useState(true);
  const [eduVisible, setEduVisible] = useState(false);

  const HandleVisibility = (type) => {
    if (type === "experience") {
      setExpVisible(true);
      setEduVisible(false);
    } else {
      setExpVisible(false);
      setEduVisible(true);
    }
  };

  return (
    <section className="timeline-container">
      <h3 className="about-heading">Timeline</h3>
      <div className="select-btn">
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 5px white ",
          }}
          className={expVisible ? "active-timeline" : ""}
          onClick={() => HandleVisibility("experience")}
        >
          Experience
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 5px white ",
          }}
          className={eduVisible ? "active-timeline" : ""}
          onClick={() => HandleVisibility("education")}
        >
          Education
        </motion.button>
      </div>
      <article className="timeline-content">
        {expVisible && (
          <div className="experience-content">
            <VerticalTimeline layout="2-columns" lineColor={"black"}>
              <VerticalTimelineElement
                // key={data?._id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={`Aug, 2025 - Present`}
                textClassName={"geee"}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={workIcon}
              >
                <h3 className="vertical-timeline-element-title job-title">
                  Software Engineer
                </h3>
                <p className="vertical-timeline-element-subtitle ">
                  Pulselink Innovations Pvt Ltd
                  <span className="location">{"Noida"}</span>
                </p>
                <li>
                  Collaborates closely with backend engineers to design robust
                  APIs, define contracts, and integrate RESTApi endpoints.
                </li>
                <li>
                  Implement resilient data-fetching, caching, and error handling
                  using RTK Query to reduce redundant calls and improve
                  perceived UI responsiveness.
                </li>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                // key={data?._id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={`July, 2022 - July, 2025`}
                textClassName={"geee"}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={workIcon}
              >
                <h3 className="vertical-timeline-element-title job-title">
                  Software Developer
                </h3>
                <p className="vertical-timeline-element-subtitle ">
                  Eloop Dev Solutions LLP
                  <span className="location">{"Delhi-NCR"}</span>
                </p>
                <li>
                  Developed and maintained responsive and user-friendly web
                  applications using modern frontend technologies such as
                  NextJS, ReactJS, CSS3, AntDesign, Zustand, and Tailwind CSS.
                </li>
                <li>
                  Actively participating in agile development methodologies,
                  attending daily stand-ups, and collaborating over Jira, Slack,
                  and Trello.
                </li>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              />
            </VerticalTimeline>
          </div>
        )}
        {eduVisible && (
          <div className="education-content">
            <VerticalTimeline layout="2-columns" lineColor={"black"}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date={`${data?.startDate.substring(
                //   0,
                //   7
                // )} - ${data?.endDate.substring(0, 7)}`}
                textClassName={"geee"}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={eduIcon}
              >
                <h3 className="vertical-timeline-element-title job-title">
                  M.Tech -Electronics and Communication Engineering
                </h3>
                <p className="vertical-timeline-element-subtitle">
                  National Institute of Technology Kurukshetra
                </p>
                <p className="location">Haryana, India</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                textClassName={"geee"}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={eduIcon}
              >
                <h3 className="vertical-timeline-element-title job-title">
                  B.E. -Electronics and Telecommunication Engineering
                </h3>
                <p className="vertical-timeline-element-subtitle">
                  MGM'S College of Engineering and Technology
                </p>
                <p className="location">Navi Mumbai, Maharashtra</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                textClassName={"geee"}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={eduIcon}
              >
                <h3 className="vertical-timeline-element-title job-title">
                  12th CBSE
                </h3>
                <p className="vertical-timeline-element-subtitle">
                  Kendriya Vidyalaya No.2
                </p>
                <p className="location">Udhampur, J&K </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                textClassName={"geee"}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={eduIcon}
              >
                <h3 className="vertical-timeline-element-title job-title">
                  10th CBSE
                </h3>
                <p className="vertical-timeline-element-subtitle">
                  Kendriya Vidyalaya No.2
                </p>
                <p className="location">Udhampur, J&K</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              />
            </VerticalTimeline>
          </div>
        )}
      </article>
    </section>
  );
};

export default Timeline;

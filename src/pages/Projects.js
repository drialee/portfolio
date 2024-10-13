import React, { useState } from "react";
import "../styles/projects.css";
import timelineData from "../utils/projectData";
import { getBorderStyle } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const ProjectBox = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={project.type === "web" ? "web-box" : "mobile-box"}
      style={{
        ...getBorderStyle(isHovered, project.color),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>{project.header}</h1>
      <h2>{project.caption}</h2>
    </div>
  );
};
console.log("TIMELINE", timelineData);
const Projects = () => {
  return (
    <div className="project-page">
      {timelineData.map((data, idx) => {
        return <ProjectBox project={data} key={idx} />;
      })}
    </div>
  );
};

export default Projects;

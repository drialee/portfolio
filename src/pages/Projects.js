import React, { useState } from "react";
import "../styles/projects.css";
import timelineData from "../utils/projectData";
import { getBorderStyle } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const ProjectBox = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    try {
      navigate(`/${project.url}`);
    } catch (error) {
      console.error("error during navigation");
    }
  };

  return (
    <div
      className={project.type === "web" ? "web-box" : "mobile-box"}
      style={{
        ...getBorderStyle(isHovered, project.color),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNav}
    >
      <div className="project-header">
        <h3>{project.header}</h3>
      </div>
      <div className="proj-image">
        <img width="100px" src={project.imageLink} />
      </div>
    </div>
  );
};
const Projects = () => {
  return (
    <div className="projects">
      {timelineData.map((data, idx) => {
        return <ProjectBox project={data} key={idx} />;
      })}
    </div>
  );
};

export default Projects;

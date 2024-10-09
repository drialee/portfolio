import React, { useState } from "react";
import "../styles/projects";
import timelineData from "../utils/projectData";
import { getBorderStyle } from "../utils/utils";

const ProjectBox = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleNavigation = useHandleNavigation();
  return (
    <div
      className={data.type === "web" ? "web-box" : "mobile-box"}
      style={{
        backgroundColor: data.solidColor,
        ...getBorderStyle(isHovered, data.backgroundColor),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>{data.header}</h1>
      <p>{data.caption}</p>
    </div>
  );
};

const Projects = ({ timelineData }) => {
  return (
    <div className="project-page">
      {timelineData.map((data, idx) => {
        <ProjectBox data={data} />;
      })}
    </div>
  );
};

export default Projects;

import React, { useState, useEffect, useMemo } from "react";
import initials from "../utils/Home/initials.png";
import "../styles/nav.css";

const ProjectNavBar = ({ sections = [] }) => {
  // Map pathnames to their respective index in the tabs array
  const [currentSection, setCurrentSection] = useState(0);

  const handleNavigation = (idx) => {
    setCurrentSection(idx);
    const sectionElement = document.getElementById(sections[idx]);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="side-bar">
      <ul className="side-ul">
        {sections.map((section, idx) => (
          <li
            key={idx}
            className={currentSection === idx ? "side-active-tab" : "side-li"}
            style={{ transform: "rotate(270deg)" }}
            onClick={() => handleNavigation(idx)} // Handle navigation on click
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectNavBar;

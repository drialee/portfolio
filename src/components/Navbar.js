import React, { useState, useEffect, useMemo } from "react";
import initials from "../utils/Home/initials.png";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/nav.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCurrent, setIsCurrent] = useState(0);
  const tabs = ["Home", "About", "Projects"];
  const routes = ["/", "/About", "/Projects"]; // Define the routes for each tab

  // Map pathnames to their respective index in the tabs array
  useEffect(() => {
    const pathMap = {
      "/": 0,
      "/About": 1,
      "/Projects": 2,
      "/Chinatown": 2,
      "/Bolivia": 2,
    };

    const currentTab = pathMap[location.pathname] || 0; // Default to Home (0) if path doesn't match
    setIsCurrent(currentTab);
  }, [location]);

  const handleNavigation = (idx) => {
    setIsCurrent(idx);
    navigate(routes[idx]); // Navigate to the corresponding route when clicked
  };

  return (
    <div className="bar">
      <div className="initials-box">
        <img height="100%" src={initials} />
      </div>
      <ul>
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={isCurrent === idx ? "active-tab" : ""}
            onClick={() => handleNavigation(idx)} // Handle navigation on click
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

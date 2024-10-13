import React, { useState, useEffect, useMemo } from "react";
import initials from "../utils/Home/initials.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isCurrent, setIsCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const tabs = ["Home", "About", "Projects"];

  useEffect(() => {
    if (isCurrent !== null) {
      try {
        navigate(`/${tabs[isCurrent]}`);
      } catch (error) {
        console.error("error during navigation");
      }
    }
  }, [isCurrent, navigate, tabs]);
  return (
    <div
      style={{
        width: "100%",
        height: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ height: "100%", width: "50px" }}>
        <img src={initials} />
      </div>
      <div
        style={{
          width: "200px",
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {tabs.map((tab, idx) => {
          return (
            <div
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
              onMouseDown={() => setIsCurrent(idx)}
              style={{
                color:
                  isHovered === idx || isCurrent === idx ? "#3986FF" : "black",
                cursor: "pointer",
              }}
            >
              <p>{tab}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;

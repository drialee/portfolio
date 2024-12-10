import React from "react";
import Dino from "../utils/Home/Dino.png";
import { isMobile } from "react-device-detect";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        alignSelf: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: isMobile ? "10px" : "12% 20% 5% 20%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: "80px", maxHeight: "80px" }}>
          <img height="100%" src={Dino} />
        </div>
        <p>2024 Dria Lee</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: isMobile ? "10px" : "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Elsewhere</h4>
          <a
            href="https://www.linkedin.com/in/dria-lee/"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>LinkedIn</p>
          </a>
          <a
            href="/DriaLeeResume.pdf"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Resume</p>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Contact</h4>
          <a
            href="mailto:drialee@alumni.stanford.edu"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Message</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

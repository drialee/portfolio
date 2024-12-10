import React from "react";
import "../../styles/projectPage.css";

import ProjectNavBar from "../../components/ProjectNavBar";
import { hexToRgba } from "../../utils/utils";

import Cover from "../../utils/projects/MySite/PortfolioCover.png";
import Proj1 from "../../utils/projects/MySite/Projects1.png";
import Proj2 from "../../utils/projects/MySite/Projects2.png";
import Theme1 from "../../utils/projects/MySite/Theme1.png";
import Theme2 from "../../utils/projects/MySite/Theme2.png";
import Time1 from "../../utils/projects/MySite/Timeline1.png";
import Time2 from "../../utils/projects/MySite/Timeline2.png";
import Layout1 from "../../utils/projects/MySite/Layout1.png";
import Layout2 from "../../utils/projects/MySite/Layout2.png";
import Layout3 from "../../utils/projects/MySite/Layout3.png";

const Portfolio = () => {
  return (
    <div>
      <ProjectNavBar sections={["About", "Branding", "Prototyping"]} />
      <div className="project-page">
        <div className="proj-header">
          <h1>My Portfolio</h1>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col">
              <h5>Timeline</h5>
              <p>June - Dec 2024</p>
            </div>
            <div className="col">
              <h5>Team</h5>
              <p>1 person</p>
            </div>
            <div className="col">
              <h5>Role</h5>
              <p>Front-End Engineer</p>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
        <div
          className="cover-photo"
          style={{
            backgroundColor: `rgba(${hexToRgba("#8338EC", 0.3)})`,
            paddingTop: "5vh",
          }}
        >
          <img src={Cover} />
        </div>
        <div className="section" id="About">
          <h2>About</h2>
          <p>
            Welcome to my portfolio site! You're looking at a project that I
            designed and built entirely from scratch. This is a redesign of my
            previous portfolio, which I originally created on Wix. I wanted to
            push myself further and take on the challenge of coding it myself.
          </p>
          <p>
            Fun fact: during the final stages of my first version, I
            accidentally executed the dreaded '-rm -rf' command in my terminal,
            wiping everything on my computer. It took me months to rebuild the
            courage to start over, but here we are—this is Version 2 of my coded
            portfolio, and I couldn't be prouder of the result!
          </p>
        </div>
        <div className="section" id="Branding">
          <h2>Branding</h2>
          <p>
            I wanted the colors and fonts of my portfolio to reflect my bold yet
            lighthearted personality. The design choices were carefully selected
            to create an engaging and approachable experience while staying true
            to my style.
          </p>
          <p>
            These are the colors I chose to guide the look and feel of my site:{" "}
          </p>
          <div className="row" style={{ gap: "5vh", marginTop: "5vh" }}>
            <img src={Theme1} />
            <img src={Theme2} />
          </div>
        </div>
        <div className="section" id="Prototyping">
          <h2>Prototyping</h2>
          <p>
            I used Figma to design key wireframes, building upon concepts from
            my previous site while incorporating inspiration from portfolio
            designs I admired online. My goal was to create a more cohesive and
            polished design that better reflected my style and priorities.
          </p>
          <div
            className="col"
            style={{
              gap: "5vh",
              marginTop: "5vh",
            }}
          >
            <h3>Project Page</h3>

            <div className="row" style={{ gap: "10px" }}>
              <img src={Layout1} width="350px" />
              <img src={Layout2} width="350px" />
              <img src={Layout3} width="350px" />
            </div>
            <p>
              I explored various layouts for my project page. My old site
              featured a vertical layout with bold lettering and vibrant colors.
              For my new site, I aimed for a more thematic and concise design,
              focusing on presenting key information in a clean, digestible
              format rather than overwhelming the viewer with details.
            </p>
          </div>
          <div
            className="col"
            style={{
              gap: "5vh",
              marginTop: "5vh",
            }}
          >
            <h3>Project Tab</h3>

            <div
              className="row"
              style={{ gap: "10px", justifyContent: "center" }}
            >
              <img src={Proj1} width="350px" />
              <img src={Proj2} width="350px" />
            </div>
            <p>
              I introduced a dedicated project page to house all my projects in
              one centralized space. This required careful consideration of
              which elements and information to prioritize while maintaining a
              clean, non-overwhelming layout.
            </p>
          </div>
          <div
            className="col"
            style={{
              gap: "5vh",
              marginTop: "5vh",
            }}
          >
            <h3>Timeline</h3>

            <div
              className="row"
              style={{ gap: "10px", justifyContent: "center" }}
            >
              <img src={Time1} width="350px" />
              <img src={Time2} width="350px" />
            </div>
            <p>
              I added a timeline feature to visually showcase my journey.
              Learning design and engineering in a short time frame has been a
              transformative experience, and I felt that a timeline would help
              communicate this progression in a clear and engaging way.
            </p>
          </div>
          <div
            className="col"
            style={{
              gap: "5vh",
              marginTop: "5vh",
            }}
          >
            <h3>Animation</h3>
            <p>
              To inject personality into my site, I experimented with animated
              GIFs and colorful doodles. These touches were intended to reflect
              my playful nature and add vibrancy to the overall design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

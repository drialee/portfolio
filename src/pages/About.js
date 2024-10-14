import React, { useRef, useState } from "react";
import prof from "../utils/About/prof";
import "../styles/textPage.css";
import Arrow from "../components/Arrow";
import fire from "../utils/photography/edits/B_a2.jpg";
import china from "../utils/photography/chinatown/C_91.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);

  const scrollToRest = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'Timeline' not found.");
    }
  };
  return (
    <div className="page">
      <div
        className="horizontal-box"
        style={{ gap: "5%", paddingBottom: "5%" }}
      >
        <div>
          <img src={prof} height="350px" style={{ borderRadius: "5px" }} />
        </div>
        <div
          className="col-box"
          style={{ marginTop: "5%", gap: "10px", maxWidth: "50%" }}
        >
          <h1>Hey there!</h1>
          <h3>
            I'm a recent graduate from Stanford University with a degree in
            Product Design, focusing on AI and Digital User Experience, along
            with a minor in Computer Science.
          </h3>
        </div>
      </div>
      <Arrow onClick={scrollToRest} />
      <div
        ref={aboutRef}
        className="col-box"
        style={{ margin: "10% 0 10% 0", gap: "50px" }}
      >
        <div className="horziontal-box">
          <h3>
            My journey has been quite an adventure. I started at Stanford as a
            liberal arts major, focused on Economics and International
            Relations, steering clear of anything STEM. But I soon rediscovered
            a part of myself—the girl who loved puzzles and creating things. In
            my junior year, I made a pivotal switch to design and tech,
            reigniting my passion for learning.
          </h3>
        </div>
        <div className="horizontal-box">
          <h3>
            Front-end development is where I've found my sweet spot—a perfect
            mix of design and computer science. It allows me to blend creativity
            with technical skills, crafting beautiful, functional experiences.
            My client-side background helps me truly understand what users want
            and need from the things I build.
          </h3>
        </div>
        <div className="horizontal-box">
          <h3>
            Outside of design and coding, I love road trips, photography, and
            exploring new coffee shops.
          </h3>
        </div>
        <div className="horizontal-box" style={{ width: "100%", gap: "30px" }}>
          <div
            className="image-container"
            onClick={() => navigate(`/Chinatown`)}
            onMouseEnter={() => setIsHovered(0)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={china}
              height="250px"
              style={{
                boxShadow:
                  isHovered === 0 ? "0 4px 8px rgba(0, 0, 0, 0.6)" : "none",
                transition: "box-shadow 0.2s ease",
                borderRadius: "5px",
              }}
            />
            <div className="caption">
              <p>Chinatown, 2021</p>
            </div>
          </div>
          <div
            className="image-container"
            onClick={() => navigate(`/Bolivia`)}
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={fire}
              height="250px"
              style={{
                boxShadow:
                  isHovered === 1 ? "0 4px 8px rgba(0, 0, 0, 0.6)" : "none",
                transition: "box-shadow 0.2s ease",
                borderRadius: "5px",
              }}
            />
            <div className="caption">
              <p>Bolivia, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

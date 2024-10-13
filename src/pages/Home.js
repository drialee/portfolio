import React, { useRef } from "react";
import Arrow from "../components/Arrow";
import Timeline from "../components/Timeline";
import timelineData from "../utils/projectData";
import Profile from "../utils/Home/profile.png";
import introVid from "../utils/Home/intro.mp4";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const timelineRef = useRef(null);
  // delete later
  const navigate = useNavigate();

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'Timeline' not found.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* delete later */}
      <div onClick={() => navigate(`/About`)}>About</div>
      <div onClick={() => navigate(`/Projects`)}>Projects</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10%",
          paddingBottom: "5%",
        }}
      >
        <img src={Profile} height="350px" />
        <video
          autoPlay
          loop
          height="200px"
          src="../utils/Home/intro.mp4"
          type="video/quicktime"
        />
      </div>
      <Arrow onClick={scrollToTimeline} />
      <Timeline ref={timelineRef} timelineData={timelineData} />
    </div>
  );
};

export default Home;

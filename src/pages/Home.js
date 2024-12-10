import React, { useRef } from "react";
import Arrow from "../components/Arrow";
import Timeline from "../components/Timeline";
import timelineData from "../utils/projectData";
import Profile from "../utils/Home/profile.png";
import introVid from "../utils/Home/intro.mp4";
import { isMobile } from "react-device-detect";

const Home = () => {
  const timelineRef = useRef(null);

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
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
          marginBottom: isMobile ? "100px" : "",
          padding: isMobile ? "10% 5%" : "5% 0", // Adjust padding for mobile
          gap: isMobile ? "10px" : "5%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={{ height: isMobile ? "250px" : "350px" }}>
          <img src={Profile} />
        </div>

        <video
          autoPlay
          loop
          height={isMobile ? "100px" : "180px"}
          src={introVid}
          type="video/quicktime"
        />
      </div>
      <Arrow onClick={scrollToTimeline} />
      <Timeline ref={timelineRef} timelineData={timelineData} />
    </div>
  );
};

export default Home;

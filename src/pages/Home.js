import React, { useRef } from "react";
import Arrow from "../components/Arrow";
import Timeline from "../components/Timeline";
import timelineData from "../utils/projectData";
import "../styles/home.css";

const Home = () => {
  const timelineRef = useRef(null);

  const scrollToTimeline = () => {
    console.log("CLICKED");
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'Timeline' not found.");
    }
  };

  return (
    <div className="home">
      <Arrow onClick={scrollToTimeline} />
      <Timeline ref={timelineRef} timelineData={timelineData} />
    </div>
  );
};

export default Home;

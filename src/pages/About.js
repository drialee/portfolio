import React from "react";
import prof from "../utils/About/prof";

const About = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <div style={{ height: "400px" }}>
        <img src={prof} height="100%" style={{ borderRadius: "5px" }} />
      </div>
      <div
        style={{
          maxWidth: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p>
          Welcome! I'm a recent graduate from Stanford University with a degree
          in Product Design, focusing on AI and Digital User Experience, along
          with a minor in Computer Science.
        </p>
        <p>
          My journey to this point has been quite the adventure. I started at
          Stanford as a liberal arts major, diving into Economics and
          International Relations while doing my best to avoid anything
          STEM-related. However, I soon realized I had forgotten a large part of
          myself —-- the girl who loved puzzles and creating things. So, in my
          junior year, I took a leap and switched my major. It was one of the
          best decisions I’ve ever made, reigniting my passion for learning,
          especially where design and tech come together.
        </p>
        <p>
          Front-end development is where I’ve found my sweet spot. It’s the
          perfect blend of design and computer science, two areas I’m incredibly
          passionate about. I especially love that it lets me combine my
          creative side with my technical skills to create beautiful and
          functional experiences. My background on the client-facing side has
          given me a great perspective on understanding what people really want
          and need from the things I design.
        </p>
        <p>
          When I’m not designing or coding, you can find me on a road trip,
          capturing moments with my camera, hitting the pickleball courts, or
          enjoying some delicious dim sum.
        </p>
      </div>
    </div>
  );
};

export default About;

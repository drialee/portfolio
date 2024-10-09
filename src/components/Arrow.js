import React, { useEffect, useRef } from "react";
import ArrowVid from "../utils/Home/arrow2.mov";

const Arrow = ({ onClick }) => {
  const animatedElemRef = useRef(null);

  const triggerAnimation = () => {
    const elem = animatedElemRef.current;
    if (elem) {
      elem.classList.add("shake");

      setTimeout(() => {
        elem.classList.remove("shake");
      }, 3000);
    }
  };

  useEffect(() => {
    const startAnimation = () => {
      triggerAnimation();
      const interval = setTimeout(() => {
        startAnimation();
      }, 10000);
      return () => clearTimeout(interval);
    };
    startAnimation();
    return () => clearTimeout(startAnimation);
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div id="animatedElem" ref={animatedElemRef} onClick={onClick}>
        <video autoPlay loop width="200px" height="100px">
          <source src={ArrowVid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Arrow;

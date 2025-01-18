import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";
import { translate_to_speech } from "../elevenLabsClient";

const PlayButton = ({ text }) => {
  const handleClick = () => {
    // Trigger the TTS process on button/icon click
    console.log("MEOW");
    translate_to_speech(text);
  };

  return (
    <div style={{ width: "50px" }}>
      <MdPlayCircleFilled
        width="100%"
        style={{ cursor: "ponter" }}
        onClick={handleClick}
      />
    </div>
  );
};

export default PlayButton;

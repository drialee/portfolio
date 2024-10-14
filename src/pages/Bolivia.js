import React from "react";
import "../styles/photoPage.css";

const importAll = (requireContext) => {
  return requireContext.keys().sort().map(requireContext);
};

const images = importAll(
  require.context("../utils/photography/edits", false, /\.(png|jpe?g|svg)$/)
);

const Bolivia = () => {
  const imageDetails = [
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "v" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
    { orientation: "h" },
  ];
  return (
    <div className="photo-page">
      <div className="header">
        <h1>Bolivia and Chile</h1>
        <h3>October 2024</h3>
        <p>
          I embarked on a 10-day photography journey across Bolivia and Northern
          Chile, experimenting with night photography and using long exposures
          to capture the breathtaking landscapes and the dynamic interplay of
          lights.
        </p>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`proj-image-container ${imageDetails[index]?.orientation}`}
          >
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bolivia;

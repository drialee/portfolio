import React from "react";
import "../styles/photoPage.css";
import { isMobile } from "react-device-detect";

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
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const imageChunks = chunkArray(images, 10);

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
        {!isMobile
          ? images.map((image, index) => (
              <div
                key={index}
                className={`proj-image-container ${imageDetails[index]?.orientation}`}
              >
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              </div>
            ))
          : imageChunks.map((chunk, rowIndex) => (
              <div key={rowIndex} className="scrollable-row">
                {chunk.map((image, index) => (
                  <div
                    key={index}
                    className={`proj-image-container  ${imageDetails[rowIndex * 10 + index]?.orientation}`}
                  >
                    <img
                      src={image}
                      alt={`Image ${rowIndex * 10 + index + 1}`}
                    />
                  </div>
                ))}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Bolivia;

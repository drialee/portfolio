import React from "react";
import "../styles/photoPage.css";
import { isMobile } from "react-device-detect";

// Dynamically import all images from the folder
const importAll = (requireContext) => {
  return requireContext.keys().sort().map(requireContext);
};

// Automatically import all images from the "chinatown" folder
const images = importAll(
  require.context("../utils/photography/chinatown", false, /\.(png|jpe?g|svg)$/)
);
const Chinatown = () => {
  const imageDetails = [
    { orientation: "v" },
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
  ];

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const imageChunks = chunkArray(images, 5);

  return (
    <div className="photo-page">
      <div className="header">
        <h1>The Duality of San Francisco's Chinatown</h1>
        <h3>November 2021</h3>
        <p>
          By capturing reflections in one of the largest and oldest Chinatowns,
          my series explores the duality of Chinese communities in modern
          Western society. Through photos of Chinatown’s shops and streets, I
          highlight how Chinese immigrants have woven their culture into San
          Francisco, even as gentrification and rising rents threaten their
          businesses. My work reflects the ongoing tension between maintaining
          cultural identity and adapting to Western influences. The series
          concludes with a photograph of persimmons, a symbol of good luck and
          longevity in Chinese culture.
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
                    className={`proj-image-container  ${imageDetails[rowIndex * 5 + index]?.orientation}`}
                  >
                    <img
                      src={image}
                      alt={`Image ${rowIndex * 5 + index + 1}`}
                    />
                  </div>
                ))}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Chinatown;

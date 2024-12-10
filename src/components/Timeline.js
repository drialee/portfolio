import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBorderStyle, Tag } from "../utils/utils";
import "../styles/timeline.css";
import { isMobile } from "react-device-detect";

const colorOrder = ["orange", "pink", "purple", "blue"];

const TimelineItem = ({ timelineData }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNav = () => {
    try {
      navigate(`/${timelineData.url}`);
    } catch (error) {
      console.error("error during navigation");
    }
  };

  return (
    <div
      className="timeline-item"
      onClick={handleNav}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getBorderStyle(isHovered, timelineData.color)}
    >
      <div className="timeline-item-content">
        <h3>{timelineData.header}</h3>
        <p>{timelineData.caption}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          {timelineData.tags.map((tag, idx) => {
            return (
              <div
                key={idx}
                style={{
                  ...Tag(isHovered, timelineData.color),
                }}
              >
                <div>{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Timeline = React.forwardRef((props, ref) => {
  const sortedTimelineData = props.timelineData.sort((a, b) => {
    return colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color);
  });
  return (
    <div className="timeline" ref={ref}>
      {sortedTimelineData.map((data, idx) => (
        <TimelineItem timelineData={data} key={idx} />
      ))}
    </div>
  );
});

export default Timeline;

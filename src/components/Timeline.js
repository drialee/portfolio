import React from 'react'

const TimelineItem = ({ timelineData }) => {

    const borderStyle = {
        borderRadius: '10px',
        border: isHovered ? `3px solid ${data.color}` : '2px transparent',
        boxShadow: isHovered ? `0px 0px 4px rgba(${hexToRgba(data.color, 0.5)})` : 'none', // Adjust alpha value as needed
        backgroundColor: isHovered ? `rgba(${hexToRgba(data.color, 0.3)})` : 'none', // Adjust alpha value as needed
    };
    
    return (
        <div className="timeline-item">
            <span className="circle"/> {/* Move circle outside the content */}
            <div className="timeline-item-content">
                <h1> 
                    {timelineData.header} 
                </h1>
                <time>{timelineData.date}</time>
                <p>{timelineData.caption}</p>
            </div>
        </div>
    )
};

const Timeline = React.forwardRef((props, ref) => {
    return (
        props.timelineData.length > 0 && ( 
            <div className="timeline" ref={ref}>
                {props.timelineData.map((data, idx) => (
                    <TimelineItem timelineData={data} key={idx} />
                ))}
            </div>
        )
    );

})

export default Timeline;

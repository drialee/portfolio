import React from 'react'

const TimelineItem = ({ timelineData }) => {
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

export const Timeline = ({}) => {

}

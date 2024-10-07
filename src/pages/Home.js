import React from 'react'
import Arrow from 'components/Arrow'
import Timeline from 'components/Timeline'


const Home = () => {
    const scrollToTimeline = () => {
        const timelineElement = document.getElementById('Timeline');
        if (timelineElement) {
            timelineElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("Element with ID 'Timeline' not found.");
        }
    };

    const timelineRef = useRef(null);

    return (
        <div>
        <Arrow onClick={scrollToTimeline} />
        <Timeline ref={timelineRef} timelineData={timelineData}/>
    </div>
    )
}

export default Home;
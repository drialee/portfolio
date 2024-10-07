import React from 'react'

const Button = ({ onClick, color, title }) => {
    return (
        <div
            onClick={onClick}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color,
                borderRadius: '20px',
                padding: '10px 20px', // Added padding for better appearance
                cursor: 'pointer' // Added cursor pointer for better UX
            }}
        >
            {title}
        </div>
    );
};

const About = () => {
    <div>
        Hi there! I recently graduated from Stanford University with a degree in Product Design, focusing on AI and Digital User Experience, along with a minor in Computer Science.

        My journey to this point has been quite the adventure. I started at Stanford as a liberal arts major, diving into Economics and International Relations while doing my best to avoid anything STEM-related. But as I went on, I realized I was missing a big part of myself —-- the girl who loved puzzles and building things. So, in my junior year, I took a leap and switched my major. It was one of the best decisions I’ve ever made, reigniting my passion for learning, especially where design and tech come together.

        Front-end development is where I’ve found my sweet spot. It’s the perfect blend of design and computer science, two areas I’m incredibly passionate about. I love that it lets me combine my creative side with my technical skills to create beautiful and functional experiences. My background in marketing and business has given me a great perspective on understanding what people really want and need from the things I design.

        When I’m not designing or coding, you can find me on a road trip, capturing moments with my camera, hitting the slopes, or enjoying some delicious dim sum.
    </div>
}

export default About;
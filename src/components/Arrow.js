import React, { useEffect, useRef } from 'react';

const Arrow = ({ onClick }) => {
    const animatedElemRef = useRef(null);

    const triggerAnimation = () => {
        const elem = animatedElemRef.current;
        if (elem) {
            elem.classList.add('shake');

            setTimeout(() => {
                elem.classList.remove('shake');
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
        <div style={{ width: '100%' }}>
            <div id="animatedElem" ref={animatedElemRef}>
                {/* Your content here */}
            </div>
        </div>
    );
};

export default Arrow;
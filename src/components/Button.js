import React from 'react'
import { hexToRgb } from '../utils/hexToRgb';

const Button = ({color, title}) => {
    const [isHovered, setIsHovered] = useState(false);
    const borderStyle = {
        borderRadius: '10px',
        border: isHovered ? `3px solid ${color}` : '2px transparent',
        backgroundColor: isHovered ? `rgba(${hexToRgb(color)}, 0.1)` : 'transparent', 
    };
    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '40px',
                padding: '20px 20px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '700',
                ...borderStyle
            }}
        >
            {title}
        </div>
    );
};

export default Button;

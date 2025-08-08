
import React from 'react';

function Paragraph({ children, style = {} }) {
    const baseStyle = {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
        margin: '8px 0',
        ...style,
    };

    return <p style={baseStyle}>{children}</p>;
}

export default Paragraph;

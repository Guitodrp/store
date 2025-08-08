import React from 'react';

function Title({ children, level = 1, style = {} }) {
    const Tag = `h${level}`; // h1, h2, h3, etc.

    const baseStyle = {
        fontWeight: 'bold',
        fontSize: level === 1 ? '28px' :
            level === 2 ? '24px' :
                level === 3 ? '20px' : '18px',
        color: '#333',
        margin: '8px 0',
        ...style,
    };

    return <Tag style={baseStyle}>{children}</Tag>;
}

export default Title;

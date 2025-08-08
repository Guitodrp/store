import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderButton({ to, children }) {
    const [hovered, setHovered] = useState(false);

    const baseStyle = {
        textDecoration: 'none',
        backgroundColor: hovered ? '#398ab6ff' : '#6b8494ff',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 500,
        transition: 'all 0.3s ease',
    };

    return (
        <Link
            to={to}
            style={baseStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </Link>
    );
}

export default HeaderButton;

import React from 'react';

function Image({ src, alt, style, ...rest }) {
    return (
        <img
            src={src}
            alt={alt}
            style={{ maxWidth: '100%', height: 'auto', ...style }}
            {...rest}
        />
    );
}

export default Image;

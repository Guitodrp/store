import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function ProductCard({ product }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                ...styles.card,
                ...(hovered ? styles.hoverCard : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to={`/product/${product.id}`} style={styles.link}>
                <img src={product.image} alt={product.name} style={styles.image} />
                <h3 style={styles.name}>{product.name}</h3>
            </Link>

            <div>
                <p style={styles.price}>R$ {product.price.toFixed(2)}</p>
                <Button fullWidth onClick={() => alert('Adicionado ao carrinho')}>
                    Adicionar ao carrinho
                </Button>
            </div>
        </div>
    );
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '320px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        textAlign: 'center',
        backgroundColor: '#fff',
        transition: 'all 0.3s ease',
    },
    hoverCard: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.02)',
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: '140px',
        objectFit: 'contain',
        backgroundColor: '#f9f9f9',
        marginBottom: '12px',
    },
    name: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        margin: '8px 0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    price: {
        margin: '8px 0',
        fontWeight: '500',
        fontSize: '18px',
        color: '#555',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
};

export default ProductCard;

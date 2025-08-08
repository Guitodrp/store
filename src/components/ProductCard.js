import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Flex from './Flex';

function ProductCard({ product }) {
    return (
        <div style={styles.card}>
            <Link to={`/product/${product.id}`} style={styles.link}>
                <img src={product.image} alt={product.name} style={styles.image} />
                <h3>{product.name}</h3>
                <p>R$ {product.price.toFixed(2)}</p>
            </Link>
            <Flex justify="center">
                <Button fullWidth onClick={() => alert('Adicionado ao carrinho')}>
                    Adicionar ao carrinho
                </Button>
            </Flex>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 'auto',
        marginBottom: '12px',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
};

export default ProductCard;

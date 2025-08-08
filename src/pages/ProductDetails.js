import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();

    return (
        <div style={{ padding: '40px' }}>
            <h2>Detalhes do Produto</h2>
            <p>ID do produto: {id}</p>
            <p>Mais informações em breve...</p>
        </div>
    );
}

export default ProductDetails;

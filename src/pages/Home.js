import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
    return (
        <div style={{ padding: '40px' }}>
            <h1 style={{ textAlign: 'center' }}>Bem-vindo à nossa loja!</h1>
            <ProductList />
        </div>
    );
}

export default Home;

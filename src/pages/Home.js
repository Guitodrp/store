import React from 'react';
import ProductList from '../components/ProductList';
import Flex from '../components/Flex';
import Title from '../components/Title';

function Home() {
    return (
        <Flex>
            <Flex style={{ marginLeft: '80px' }}>
                <Title>Bem-vindo à nossa loja!</Title>
            </Flex>
            <Flex style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Title level={2}>Produtos em Destaque</Title>
                <ProductList />
            </Flex>
        </Flex>
    );
}

export default Home;

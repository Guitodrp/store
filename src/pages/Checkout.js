import React from 'react';
import Flex from '../components/Flex';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

function Checkout() {
    return (
        <Flex>
            <Flex>
                <Title>Carrinho</Title>
            </Flex>
            <Flex>
                <Paragraph>Em breve: finalize sua compra aqui.</Paragraph>
            </Flex>
        </Flex>
    );
}

export default Checkout;

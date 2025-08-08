import React from 'react';
import { useParams } from 'react-router-dom';
import Flex from '../components/Flex';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image';
import Title from '../components/Title';

function ProductDetails() {
    const { id } = useParams();
    const preco = (id * 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <Flex style={{ flexDirection: 'column', gap: '20px', padding: '40px', alignItems: 'center' }}>
            <Title>Detalhes do Produto</Title>

            <Image
                src={`/images/${id}.webp`}
                alt={`Imagem do Produto ${id}`}
                style={{ width: '15%', height: 'auto', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
            />

            <Paragraph>Códig: {id}</Paragraph>
            <Paragraph>Nome: Produto {id}</Paragraph>
            <Paragraph>Preço: {preco}</Paragraph>

            <Flex style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px', width: '80%' }}>
                <Paragraph>
                    Informações adicionais sobre o produto {id} podem ser inseridas aqui. <br />
                    Por exemplo, detalhes técnicos, especificações, ou qualquer outra informação relevante.
                </Paragraph>
            </Flex>
        </Flex>
    );
}

export default ProductDetails;

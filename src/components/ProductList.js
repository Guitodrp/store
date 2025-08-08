import React from 'react';
import ProductCard from './ProductCard';
import Flex from './Flex';

const products = [
    { id: 1, name: 'Tênis Nike', price: 299.90, image: '/images/nike.webp' },
    { id: 2, name: 'Camiseta Adidas', price: 119.90, image: '/images/adidas.webp' },
    { id: 3, name: 'Mochila Puma', price: 159.90, image: '/images/puma.webp' },
];


function ProductList() {
    return (
        <Flex justify="center" gap="24px" wrap="wrap">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Flex>
    );
}

export default ProductList;

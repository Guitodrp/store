import React from 'react';
import { Link } from 'react-router-dom';
import Flex from './Flex';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Flex justify="space-between" align="center" style={styles.container}>
      <Link to="/" style={styles.logoContainer}>
        <img src="/images/store.png" alt="Logo" style={styles.logoImage} />
        <h1 style={styles.storeName}>Store</h1>
      </Link>

      <Flex gap="12px" style={{ marginLeft: '80px' }}>
        <HeaderButton to="/">Início</HeaderButton>
        <HeaderButton to="/checkout">Carrinho</HeaderButton>
        <HeaderButton to="/about">Sobre Nós</HeaderButton>
      </Flex>
    </Flex>
  );
}

const styles = {
  container: {
    padding: '20px 40px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImage: {
    height: '60px',
    objectfit: 'contain',
    marginRight: '12px',
  },
  storeName: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: 0,
  },
};

export default Header;

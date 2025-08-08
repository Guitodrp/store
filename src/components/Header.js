import React from 'react';
import { Link } from 'react-router-dom';
import Flex from './Flex';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <header style={styles.container}>
      <Flex align="center" flex-direction="collumn">
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
    </header>
  );
}

const styles = {
  container: {
    padding: '20px 40px',
    background: 'linear-gradient(to right, #ffffff, #f0f2f5)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.07)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImage: {
    height: '60px',
    objectFit: 'contain',
    marginRight: '12px',
  },
  storeName: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#1a202c',
    margin: 0,
  },
};

export default Header;
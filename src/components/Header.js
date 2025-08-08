import React from 'react';
import Flex from './Flex';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <Flex justify="space-between" align="center" style={styles.container}>
      <h2 style={styles.logo}>Store</h2>

      <Flex gap="12px">
        <HeaderButton to="/">Home</HeaderButton>
        <HeaderButton to="/checkout">Checkout</HeaderButton>
        <HeaderButton to="/about">About Us</HeaderButton>
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
  logo: {
    margin: 0,
    fontWeight: 'bold',
  },
};

export default Header;

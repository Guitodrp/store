import React from 'react';
import { Link } from 'react-router-dom';
import Flex from './Flex';

function Header() {
  return (
    <Flex justify="space-between" align="center" style={styles.container}>
      <h2 style={styles.logo}>Store</h2>

      <Flex gap="12px">
        <Link to="/" style={{ ...styles.button }}>
          Home
        </Link>
        <Link to="/checkout" style={{ ...styles.button }}>
          Checkout
        </Link>
        <Link to="/about" style={{ ...styles.button }}>
          About Us
        </Link>
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
  button: {
    textDecoration: 'none',
    backgroundColor: '#6b8494ff',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  },
};

// Adiciona efeito hover via CSS global
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  a:hover {
    background-color: #2980b9 !important;
    color: #fff !important;
  }
`, styleSheet.cssRules.length);

export default Header;

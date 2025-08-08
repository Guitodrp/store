import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© 2025 Store. Todos os direitos reservados.</p>
        </footer>
    );
}

const styles = {
    footer: {
        background: 'linear-gradient(to right, #f0f2f5, #ffffff)',
        borderTop: '1px solid #e2e8f0',
        textAlign: 'center',
        padding: '30px 20px',
        marginTop: '40px',
    },
    text: {
        color: '#4a5568',
        margin: 0,
        fontSize: '14px',
    }
};

export default Footer;
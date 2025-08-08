import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2025 Store. Todos os direitos reservados.</p>
        </footer>
    );
}

const styles = {
    footer: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
        marginTop: '40px',
    },
};

export default Footer;

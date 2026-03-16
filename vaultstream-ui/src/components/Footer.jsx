import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--surface-border)', 
      padding: '2rem 0', 
      marginTop: 'auto',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} VaultStream. Enterprise Software Distribution.</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Secured by AES-256 and Global CDN Edge Network.</p>
      </div>
    </footer>
  );
};

export default Footer;

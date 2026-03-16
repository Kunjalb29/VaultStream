import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, UploadCloud, LogIn, HardDrive } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="container flex-between">
        <Link to="/" className="logo text-gradient" style={{ textDecoration: 'none' }}>
          <Shield size={28} color="#6366f1" />
          VaultStream
        </Link>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link 
            to="/dashboard" 
            style={{ 
              color: location.pathname === '/dashboard' ? 'var(--primary)' : 'var(--text-main)', 
              textDecoration: 'none', 
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <HardDrive size={18} /> My Vault
          </Link>
          <Link 
            to="/upload" 
            style={{ 
              color: location.pathname === '/upload' ? 'var(--primary)' : 'var(--text-main)', 
              textDecoration: 'none', 
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <UploadCloud size={18} /> Upload
          </Link>
          <Link to="/login" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            <LogIn size={18} /> Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

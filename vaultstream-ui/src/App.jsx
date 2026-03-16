import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SecureUpload from './components/Upload';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={
              <div className="animate-fade-in" style={{ textAlign: 'center', paddingTop: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                  Secure Software <span className="text-gradient">Distribution</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Enterprise-grade platform for zero-trust file sharing, generating verifiable, expiring CDN URLs for your payloads.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Start Distributing</button>
                  <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>View Documentation</button>
                </div>
              </div>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<SecureUpload />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

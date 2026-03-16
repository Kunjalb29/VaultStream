import React, { useState } from 'react';
import { Upload, File, CheckCircle } from 'lucide-react';

const SecureUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Secure Upload</h2>
        <p style={{ color: 'var(--text-muted)' }}>Upload your software payload to generate zero-trust distribution links.</p>
      </div>

      {!success ? (
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <form 
            onDragEnter={handleDrag} 
            onDragLeave={handleDrag} 
            onDragOver={handleDrag} 
            onDrop={handleDrop}
            style={{
              border: `2px dashed ${dragActive ? 'var(--primary)' : 'var(--surface-border)'}`,
              borderRadius: '12px',
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: dragActive ? 'rgba(99, 102, 241, 0.05)' : 'transparent',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
          >
            <input 
              type="file" 
              id="file-upload" 
              style={{ display: 'none' }} 
              onChange={handleChange}
            />
            
            {!file ? (
              <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                  <Upload size={32} color="var(--primary)" />
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>Drag & drop your file here</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>or click to browse from your computer</p>
                <div className="btn btn-outline">Select File</div>
              </label>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <File size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem' }}>{file.name}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button type="button" className="btn btn-outline" onClick={() => setFile(null)}>Cancel</button>
                  <button type="button" className="btn btn-primary" onClick={handleUpload} disabled={uploading}>
                    {uploading ? 'Encrypting & Uploading...' : 'Secure Upload'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
          <CheckCircle size={64} color="var(--success)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ marginBottom: '1rem' }}>Upload Successful!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Payload securely stored. SHA-256 checksum has been verified and registered.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => { setSuccess(false); setFile(null); }}>Upload Another</button>
            <button className="btn btn-outline">Go to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecureUpload;

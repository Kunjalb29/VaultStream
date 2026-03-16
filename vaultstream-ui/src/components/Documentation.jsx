import React from 'react';
import { BookOpen, Shield, Code, Server, Check } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="animate-fade-in container" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>VaultStream Documentation</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Learn how the Enterprise Software Distribution platform operates under the hood.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Architecture Section */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
            <Server size={28} color="var(--primary)" />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>System Architecture</h3>
          </div>
          <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            VaultStream is built on the principles of Clean Architecture using an ASP.NET Core 8 Web API backend and a Vite React frontend. It decouples core domain logic from infrastructure integrations like PostgreSQL and Azure.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Domain Entities: Decoupled business objects (User, Package, DownloadLog).', 
              'Application Layer: MediatR-style CQRS interfaces orchestrating logic.',
              'Infrastructure Layer: EF Core mappings to PostgreSQL and Azure Blob Service clients.',
              'API Layer: Secure Controllers validating JWT tokens.'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                <Check size={16} color="var(--success)" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Security Section */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
            <Shield size={28} color="var(--primary)" />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Zero-Trust Security & CDN</h3>
          </div>
          <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
            Every file uploaded is immediately hashed via SHA-256 to ensure data integrity during CDN proxy transit. When a consumer requests a software package, VaultStream does not serve the blob directly. Instead, we generate an expiring Shared Access Signature (SAS) or signed JWT Token that directs the Azure Global edge CDN to serve the file directly to the client for only a 15-60 minute window securely. 
          </p>
        </div>

        {/* API Integration */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
            <Code size={28} color="var(--primary)" />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>API Integration</h3>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', fontFamily: 'monospace', color: '#a8c7fa', overflowX: 'auto' }}>
            <div><span style={{ color: '#ff7b72' }}>POST</span> /api/files/generate-download-link</div>
            <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Authorization: Bearer {'<token>'}</div>
            <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Content-Type: application/json</div>
            <br />
            {JSON.stringify({ fileId: "uuid-v4", expireMinutes: 60 }, null, 2)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Documentation;

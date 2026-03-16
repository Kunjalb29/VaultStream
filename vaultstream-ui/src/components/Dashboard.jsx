import React from 'react';
import { Link2, Clock, ShieldAlert, Download, MoreVertical } from 'lucide-react';

const Dashboard = () => {
  // Mock data for links
  const links = [
    { id: 1, name: 'VaultStream_Setup_v1.0.exe', size: '45 MB', expires: '2 hours', downloads: 12, status: 'Active' },
    { id: 2, name: 'config_production.json', size: '12 KB', expires: '15 mins', downloads: 3, status: 'Active' },
    { id: 3, name: 'legacy_data_dump.zip', size: '1.2 GB', expires: 'Expired', downloads: 45, status: 'Expired' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <div>
          <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My Vault</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage your software payloads and secure distribution links.</p>
        </div>
        <div className="btn btn-primary">
          <Link2 size={18} /> New Secure Link
        </div>
      </div>

      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)' }}>
              <th style={{ padding: '1.5rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>Package Name</th>
              <th style={{ padding: '1.5rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>Size</th>
              <th style={{ padding: '1.5rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>Metrics</th>
              <th style={{ padding: '1.5rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1.5rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}></th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr key={link.id} style={{ borderBottom: '1px solid var(--surface-border)', transition: 'background 0.2s', ':hover': { background: 'rgba(255,255,255,0.02)' } }}>
                <td style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                    <ShieldAlert size={18} color="var(--primary)" />
                  </div>
                  <span style={{ fontWeight: 500 }}>{link.name}</span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>
                  {link.size}
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                    <Download size={14} /> {link.downloads} hits
                  </div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  {link.status === 'Active' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.25rem 0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500 }}>
                      <Clock size={12} /> {link.expires}
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.25rem 0.75rem', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500 }}>
                      <ShieldAlert size={12} /> Expired
                    </span>
                  )}
                </td>
                <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem' }}>
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

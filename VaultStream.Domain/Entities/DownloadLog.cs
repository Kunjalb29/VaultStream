using System;

namespace VaultStream.Domain.Entities
{
    public class DownloadLog
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid PackageId { get; set; }
        public SoftwarePackage? Package { get; set; }
        public Guid? UserId { get; set; }
        public User? User { get; set; }
        public string IpAddress { get; set; } = string.Empty;
        public string UserAgent { get; set; } = string.Empty;
        public DateTime DownloadedAt { get; set; } = DateTime.UtcNow;
        public bool IsSuspicious { get; set; } = false;
    }
}

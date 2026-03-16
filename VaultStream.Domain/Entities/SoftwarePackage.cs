using System;

namespace VaultStream.Domain.Entities
{
    public class SoftwarePackage
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string FileName { get; set; } = string.Empty;
        public string ContentType { get; set; } = string.Empty;
        public long SizeBytes { get; set; }
        public string BlobUrl { get; set; } = string.Empty;
        public string ChecksumSHA256 { get; set; } = string.Empty;
        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
        public Guid UploadedById { get; set; }
        public User? UploadedBy { get; set; }
    }
}

using System;
using System.IO;
using System.Threading.Tasks;

namespace VaultStream.Application.Interfaces
{
    public interface IFileStorageService
    {
        Task<string> UploadFileAsync(string fileName, Stream content, string contentType);
        Task<string> GenerateDownloadUrlAsync(string blobUrl, TimeSpan expiration);
    }
}

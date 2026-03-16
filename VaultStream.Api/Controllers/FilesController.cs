using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using VaultStream.Application.Interfaces;

namespace VaultStream.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilesController : ControllerBase
    {
        private readonly IFileStorageService _fileStorageService;

        public FilesController(IFileStorageService fileStorageService)
        {
            _fileStorageService = fileStorageService;
        }

        [HttpPost("generate-download-link")]
        [Authorize]
        public async Task<IActionResult> GenerateDownloadLink([FromQuery] string blobUrl, [FromQuery] int expiryMinutes = 60)
        {
            var url = await _fileStorageService.GenerateDownloadUrlAsync(blobUrl, TimeSpan.FromMinutes(expiryMinutes));
            return Ok(new { DownloadUrl = url, ExpiresAt = DateTime.UtcNow.AddMinutes(expiryMinutes) });
        }
    }
}

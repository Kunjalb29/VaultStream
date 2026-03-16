namespace VaultStream.Application.DTOs
{
    public record RegisterRequest(string Email, string Password);
    public record LoginRequest(string Email, string Password);
    public record AuthResponse(string Token, string Email);

    public record UploadFileResponse(string FileId, string FileName, string Checksum);
    public record GenerateLinkResponse(string DownloadUrl, System.DateTime ExpiresAt);
}

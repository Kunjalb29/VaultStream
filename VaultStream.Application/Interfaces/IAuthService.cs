using System.Threading.Tasks;
using VaultStream.Application.DTOs;

namespace VaultStream.Application.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponse> RegisterAsync(RegisterRequest request);
        Task<AuthResponse> LoginAsync(LoginRequest request);
    }
}

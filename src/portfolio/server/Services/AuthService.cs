using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace server.Services;

public class AuthService : IAuthService
{
    private readonly IAuthDbService authDbService;

    public AuthService(IAuthDbService authDbService)
    {
        this.authDbService = authDbService;
    }


    public async Task<bool> ValidateAsync(string username, string password)
    {
        var user = await authDbService.GetUserByUsernameAsync(username);
        if (user is null)
        {
            return false;
        }

        string hash = BCrypt.Net.BCrypt.HashPassword(password, user.Salt);
        if (hash == user.Hash)
        {
            return true;
        }

        return false;
    }
}
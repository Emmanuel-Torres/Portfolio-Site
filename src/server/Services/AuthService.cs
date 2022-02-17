namespace server.Services;

public class AuthService : IAuthService
{
    public AuthService()
    {
        
    }
    public Task<string> ValidateAsync(string username, string password)
    {
        throw new NotImplementedException();
    }
}
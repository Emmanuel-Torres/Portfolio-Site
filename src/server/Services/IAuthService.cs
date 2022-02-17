namespace server.Services;

public interface IAuthService
{
    Task<string?> ValidateAsync(string username, string password);
}
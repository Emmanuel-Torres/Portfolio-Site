namespace server.Services;

public interface IAuthService
{
    Task<bool> ValidateAsync(string username, string password);
}
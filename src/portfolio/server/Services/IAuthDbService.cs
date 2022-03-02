using server.Models;

namespace server.Services;

public interface IAuthDbService
{
    Task<DbUser?> GetUserByUsernameAsync(string username);
}
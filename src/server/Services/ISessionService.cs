using server.Models;

namespace server.Services;

public interface ISessionService 
{
    Task<bool> ValidateSessionAsync(string sessionId);
    Task<Session> AddSessionAsync(string sessionId, string username);
}
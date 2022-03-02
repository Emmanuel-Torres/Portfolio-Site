using server.Models;

namespace server.Services;

public interface ISessionService
{
    Task<bool> IsSessionValidAsync(string? sessionId);
    Task<Session> AddSessionAsync(string sessionId, string username);
    Task<Session?> GetSessionBySessionIdAsync(string sessionId);
    Task DeleteSessionAsync(string sessionId);
}
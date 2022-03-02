using server.Models;

namespace server.Services;

public interface ISessionDbService
{
    Task<Session?> GetSessionBySessionIdAsync(string sessionId);
    Task DeleteSessionAsync(string sessionId);
    Task<Session> AddSessionAsync(Session session);
}
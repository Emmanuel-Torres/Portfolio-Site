using server.Models;

namespace server.Services;

public interface ISessionDbService
{
    Task<Session?> GetSessionByIdAsync(int sessionId);
    Task DeleteSessionAsync(int sessionId);
    Task<Session> AddSessionAsync(Session session);
}
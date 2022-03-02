using server.Models;

namespace server.Services;

public class SessionService : ISessionService
{
    private readonly ISessionDbService sessionDbService;

    public SessionService(ISessionDbService sessionDbService)
    {
        this.sessionDbService = sessionDbService;
    }

    public async Task<Session> AddSessionAsync(string sessionId, string username)
    {
        var session = new Session(sessionId, username, DateTime.UtcNow.AddHours(2));
        return await sessionDbService.AddSessionAsync(session);
    }

    public async Task DeleteSessionAsync(string sessionId)
    {
        await sessionDbService.DeleteSessionAsync(sessionId);
    }

    public async Task<Session?> GetSessionBySessionIdAsync(string sessionId)
    {
        return await sessionDbService.GetSessionBySessionIdAsync(sessionId);
    }

    public async Task<bool> IsSessionValidAsync(string? sessionId)
    {
        if (sessionId is null)
        {
            return false;
        }

        var session = await GetSessionBySessionIdAsync(sessionId);
        if (session is null)
        {
            return false;
        }
        if (DateTime.Compare(DateTime.UtcNow, session.Expiration) < 0)
        {
            return true;
        }

        return false;
    }
}

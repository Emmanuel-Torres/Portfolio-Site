using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Services;

public class SessionDbService : ISessionDbService
{
    private readonly ApplicationDbContext dbContext;

    public SessionDbService(ApplicationDbContext dbContext)
    {
        this.dbContext = dbContext;
    }
    public async Task<Session> AddSessionAsync(Session session)
    {
        var s = await dbContext.Sessions.FirstOrDefaultAsync(s => s.Username == session.Username);
        if (s is not null)
        {
            await DeleteSessionAsync(s.SessionId);
        }
        await dbContext.Sessions.AddAsync(session);
        await dbContext.SaveChangesAsync();
        return await dbContext.Sessions.FirstAsync(s => s.Id == session.Id);
    }

    public async Task<Session?> GetSessionBySessionIdAsync(string sessionId)
    {
        return await dbContext.Sessions.FirstOrDefaultAsync(s => s.SessionId == sessionId);
    }

    public async Task DeleteSessionAsync(string sessionId)
    {
        var session = await dbContext.Sessions.FirstAsync(s => s.SessionId == sessionId);
        dbContext.Remove(session);
        await dbContext.SaveChangesAsync();
    }
}
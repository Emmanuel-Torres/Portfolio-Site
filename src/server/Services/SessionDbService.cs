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
        await dbContext.Sessions.AddAsync(session);
        await dbContext.SaveChangesAsync();
        return await dbContext.Sessions.FirstAsync(s => s.Id == session.Id);
    }

    public async Task<Session?> GetSessionByIdAsync(int sessionId)
    {
        return await dbContext.Sessions.FirstOrDefaultAsync(s => s.Id == sessionId);
    }

    public async Task DeleteSessionAsync(int sessionId)
    {
        var session = await dbContext.Sessions.FirstAsync(s => s.Id == sessionId);
        dbContext.Remove(session);
        await dbContext.SaveChangesAsync();
    }
}
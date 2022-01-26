using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Services;

public class DbService : IDbService
{
    private readonly ApplicationDbContext dbContext;

    public DbService(ApplicationDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task<IEnumerable<Story>> GetStoriesAsync()
    {
        return await dbContext.Stories.ToListAsync();
    }

    public async Task<Story?> GetStoryByIdAsync(int storyId)
    {
        return await dbContext.Stories.FirstOrDefaultAsync(s => s.Id == storyId);
    }

    public async Task AddStoryAsync(Story story)
    {
        await dbContext.Stories.AddAsync(story);
        await dbContext.SaveChangesAsync();
    }

    public async Task UpdateStoryAsync(int storyId, Story story)
    {
        story.Id = storyId;
        dbContext.Stories.Update(story);
        await dbContext.SaveChangesAsync();
    }

    public async Task DeleteStoryAsync(int storyId)
    {
        throw new NotImplementedException();
    }
}
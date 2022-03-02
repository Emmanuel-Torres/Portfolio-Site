using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Services;

public class StoryDbService : IStoryDbService
{
    private readonly ApplicationDbContext dbContext;

    public StoryDbService(ApplicationDbContext dbContext)
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

    public async Task<Story> AddStoryAsync(Story story)
    {
        await dbContext.Stories.AddAsync(story);
        await dbContext.SaveChangesAsync();
        return await dbContext.Stories.FirstAsync(s => s.Id == story.Id);
    }

    public async Task<Story> UpdateStoryAsync(int storyId, Story story)
    {
        story.Id = storyId;
        dbContext.Stories.Update(story);
        await dbContext.SaveChangesAsync();
        return await dbContext.Stories.FirstAsync(s => s.Id == storyId);
    }

    public async Task<Story> DeleteStoryAsync(int storyId)
    {
        var story = await dbContext.Stories.FirstAsync(s => s.Id == storyId);
        dbContext.Stories.Remove(story);
        await dbContext.SaveChangesAsync();
        return story;
    }
}
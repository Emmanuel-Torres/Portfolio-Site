using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DbModels.Models.EntityModels;
using server.Interfaces;

namespace server.Repositories;

public class StoryRepo : IStoryRepo
{
    private readonly ApplicationDbContext dbContext;

    public StoryRepo(ApplicationDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task<IEnumerable<StoryEntity>> GetStoriesAsync()
    {
        return await dbContext.Stories.ToListAsync();
    }

    public async Task<StoryEntity?> GetStoryByIdAsync(string storyId)
    {
        return await dbContext.Stories.FirstOrDefaultAsync(s => s.Id == storyId);
    }

    // public async Task<StoryEntity> AddStoryAsync(StoryEntity story)
    // {
    //     await dbContext.Stories.AddAsync(story);
    //     await dbContext.SaveChangesAsync();
    //     return await dbContext.Stories.FirstAsync(s => s.Id == story.Id);
    // }

    // public async Task<StoryEntity> UpdateStoryAsync(string storyId, StoryEntity story)
    // {
    //     story.Id = storyId;
    //     dbContext.Stories.Update(story);
    //     await dbContext.SaveChangesAsync();
    //     return await dbContext.Stories.FirstAsync(s => s.Id == storyId);
    // }

    // public async Task<StoryEntity> DeleteStoryAsync(string storyId)
    // {
    //     var story = await dbContext.Stories.FirstAsync(s => s.Id == storyId);
    //     dbContext.Stories.Remove(story);
    //     await dbContext.SaveChangesAsync();
    //     return story;
    // }
}
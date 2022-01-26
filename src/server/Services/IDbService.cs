using server.Models;

namespace server.Services;

public interface IDbService
{
    Task<IEnumerable<Story>> GetStoriesAsync();
    Task<Story?> GetStoryByIdAsync(int storyId);
    Task AddStoryAsync(Story story);
    Task UpdateStoryAsync(int storyId, Story story);
    Task DeleteStoryAsync(int storyId);
}
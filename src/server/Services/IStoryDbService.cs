using server.Models;

namespace server.Services;

public interface IStoryDbService
{
    Task<IEnumerable<Story>> GetStoriesAsync();
    Task<Story?> GetStoryByIdAsync(int storyId);
    Task<Story> AddStoryAsync(Story story);
    Task<Story> UpdateStoryAsync(int storyId, Story story);
    Task<Story> DeleteStoryAsync(int storyId);
}
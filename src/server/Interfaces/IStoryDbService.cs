using server.DbModels.Models;

namespace server.Interfaces;

public interface IStoryDbService
{
    Task<IEnumerable<Story>> GetStoriesAsync();
    Task<Story?> GetStoryByIdAsync(string storyId);
    Task<Story> AddStoryAsync(Story story);
    Task<Story> UpdateStoryAsync(string storyId, Story story);
    Task<Story> DeleteStoryAsync(string storyId);
}
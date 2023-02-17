using server.DbModels.Models.EntityModels;

namespace server.Interfaces;

public interface IStoryRepo
{
    Task<IEnumerable<StoryEntity>> GetStoriesAsync();
    Task<StoryEntity?> GetStoryByIdAsync(string storyId);
    // Task<StoryEntity> AddStoryAsync(Story story);
    // Task<StoryEntity> UpdateStoryAsync(string storyId, Story story);
    // Task<StoryEntity> DeleteStoryAsync(string storyId);
}
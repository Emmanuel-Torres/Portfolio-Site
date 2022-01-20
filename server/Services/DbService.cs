namespace server.Services;

public class DbService : IDbService
{
    public Task<IEnumerable<Story>> GetStoriesAsync()
    {
        throw new NotImplementedException();
    }

    public Task<Story> GetStoryByIdAsync(int storyId)
    {
        throw new NotImplementedException();
    }
    
    public Task<Story> AddStoryAsync(Story story)
    {
        throw new NotImplementedException();
    }
    
    public Task<Story> UpdateStoryAsync(int storyId, Story story)
    {
        throw new NotImplementedException();
    }
    
    public Task<Story> DeleteStoryAsync(int storyId)
    {
        throw new NotImplementedException();
    }
}
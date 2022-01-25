using server.Models;

namespace server.Services;

public class DbService : IDbService
{
    private readonly string connectionString;

    public DbService(string host, string username, string password, string database, string port)
    {
        this.connectionString = $"Host=${host};Username=${username};Password=${password};Database=${database};Port=${port}";
    }

    public async Task<IEnumerable<Story>> GetStoriesAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<Story> GetStoryByIdAsync(int storyId)
    {
        throw new NotImplementedException();
    }

    public async Task<Story> AddStoryAsync(Story story)
    {
        throw new NotImplementedException();
    }

    public async Task<Story> UpdateStoryAsync(int storyId, Story story)
    {
        throw new NotImplementedException();
    }

    public async Task<Story> DeleteStoryAsync(int storyId)
    {
        throw new NotImplementedException();
    }
}
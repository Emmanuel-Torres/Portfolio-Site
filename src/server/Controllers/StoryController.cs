using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("/api")]
public class StoryController : ControllerBase
{
    private readonly ILogger<StoryController> _logger;
    private readonly IDbService dbService;

    public StoryController(ILogger<StoryController> logger, IDbService dbService)
    {
        _logger = logger;
        this.dbService = dbService;
    }

    [HttpGet]
    [Route("stories")]
    public async Task<IEnumerable<Story>> GetStories()
    {
        return await dbService.GetStoriesAsync();
    }

    [HttpGet]
    [Route("stories/{id:int}")]
    public async Task<Story?> GetStoryById(int id)
    {
        _logger.LogDebug("Getting story with id {id}", id);
        return await dbService.GetStoryByIdAsync(id);
    }

    [HttpPost]
    [Route("stories")]
    public async Task<Story> PostStory(Story story)
    {
        story.Id = null;
        return await dbService.AddStoryAsync(story);
    }

    [HttpPut]
    [Route("stories/{id:int}")]
    public async Task<Story> UpdateStory(Story story, int id)
    {
        return await dbService.UpdateStoryAsync(id, story);
    }

    [HttpDelete]
    [Route("stories/{id:int}")]
    public async Task<Story> DeleteStory(int id)
    {
        return await dbService.DeleteStoryAsync(id);
    }
}
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class StoryController : ControllerBase
{
    private readonly ILogger<StoryController> _logger;
    private List<Story> Stories = new List<Story> { new Story("Hello", DateTime.Now) };

    public StoryController(ILogger<StoryController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("posts")]
    public Task<IEnumerable<Story>> GetStories()
    {
        return Task.FromResult<IEnumerable<Story>>(Stories);
    }

    [HttpGet]
    [Route("posts/{id:int}")]
    public Task<Story> GetStoryById(int id)
    {
        return Task.FromResult<Story>(new Story("Hello", DateTime.Now));
    }

    [HttpPost]
    [Route("posts")]
    public Task<Story> PostStory(Story story)
    {
        story.Id = 5;
        return Task.FromResult<Story>(story);
    }

    [HttpPut]
    [Route("posts/{id:int}")]
    public Task<Story> UpdateStory(Story story, int id)
    {
        story.Id = id;
        return Task.FromResult<Story>(story);
    }

    [HttpDelete]
    [Route("posts/{id:int}")]
    public Task<Story> DeleteStory(int id)
    {
        return Task.FromResult<Story>(new Story("Hello", DateTime.Now));
    }
}
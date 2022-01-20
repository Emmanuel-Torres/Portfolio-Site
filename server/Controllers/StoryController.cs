using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class StroyController : ControllerBase
{
    private readonly ILogger<StroyController> _logger;
    private IEnumerable<Story> Stories = new List<Story> { new Story("Hello", "Hello", DateTime.Now) };

    public StroyController(ILogger<StroyController> logger)
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
        return Task.FromResult<Story>(new Story("Hello", "NewTitle", DateTime.Now, id: id));
    }

    // [HttpGet]
    // [Route("Hello")]
    // public string GetHello()
    // {
    //     return "Hello World";
    // }

    // [HttpPost]
    // [Route("Hello")]
    // public string PostHello(Story story)
    // {
    //     return "Foo";
    // }
}
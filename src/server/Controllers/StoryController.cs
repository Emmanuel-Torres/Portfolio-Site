using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.DbModels.Models;
using server.Interfaces;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class StoryController : ControllerBase
{
    private readonly ILogger<StoryController> logger;
    private readonly IStoryDbService dbService;

    public StoryController(ILogger<StoryController> logger, IStoryDbService dbService)
    {
        this.logger = logger;
        this.dbService = dbService;
    }

    [HttpGet]
    [Route("stories")]
    public async Task<IEnumerable<Story>> GetStories()
    {
        return await dbService.GetStoriesAsync();
    }

    [HttpGet]
    [Route("stories")]
    public async Task<Story?> GetStoryById(string id)
    {
        logger.LogDebug("Getting story with id {id}", id);
        return await dbService.GetStoryByIdAsync(id);
    }

    // [HttpPost]
    // [Route("stories")]
    // public async Task<ActionResult<Story>> PostStory(Story story)
    // {
    //     if (HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out var sessionId))
    //     {
    //         try
    //         {
    //             if (await sessionService.IsSessionValidAsync(sessionId))
    //             {
    //                 story.Id = null;
    //                 return await dbService.AddStoryAsync(story);
    //             }
    //         }
    //         catch (Exception ex)
    //         {
    //             logger.LogError("Could not post story. Ex {ex}", ex);
    //             return StatusCode(500);
    //         }
    //     }

    //     return StatusCode(403);
    // }

    // [HttpPut]
    // [Route("stories/{id:int}")]
    // public async Task<ActionResult<Story>> UpdateStory(Story story, int id)
    // {
    //     if (HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out var sessionId))
    //     {
    //         try
    //         {
    //             if (await sessionService.IsSessionValidAsync(sessionId))
    //             {
    //                 return await dbService.UpdateStoryAsync(id, story);
    //             }
    //         }
    //         catch (Exception ex)
    //         {
    //             logger.LogError("Could not update story. Ex {ex}", ex);
    //             return StatusCode(500);
    //         }
    //     }

    //     return StatusCode(403);
    // }

    // [HttpDelete]
    // [Route("stories/{id:int}")]
    // public async Task<ActionResult<Story>> DeleteStory(int id)
    // {
    //     if (HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out var sessionId))
    //     {
    //         try
    //         {
    //             if (await sessionService.IsSessionValidAsync(sessionId))
    //             {
    //                 return await dbService.DeleteStoryAsync(id);
    //             }
    //         }
    //         catch (Exception ex)
    //         {
    //             logger.LogError("Could not delete story. Ex {ex}", ex);
    //             return StatusCode(500);
    //         }
    //     }

    //     return StatusCode(403);
    // }
}
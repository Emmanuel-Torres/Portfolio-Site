using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.DbModels.Models.EntityModels;
using server.Interfaces;
using server.Repositories;

namespace server.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class StoriesController : ControllerBase
{
    private readonly ILogger<StoriesController> logger;
    private readonly IStoryRepo dbService;

    public StoriesController(ILogger<StoriesController> logger, IStoryRepo dbService)
    {
        this.logger = logger;
        this.dbService = dbService;
    }

    [HttpGet]
    public async Task<IEnumerable<StoryEntity>> GetStories()
    {
        logger.LogDebug("Returning all stories");
        return await dbService.GetStoriesAsync();
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<StoryEntity?> GetStoryById(string id)
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
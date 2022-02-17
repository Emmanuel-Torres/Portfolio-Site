using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> logger;

    public AuthController(ILogger<AuthController> logger)
    {
        this.logger = logger;
    }

    [HttpPost]
    [Route("/validate")]
    public async Task<ActionResult> Validate([FromBody] string username, [FromBody] string password)
    {
        if (username is null || password is null)
        {
            return StatusCode(400);
        }
        return Ok();
    }
}
using Microsoft.AspNetCore.Mvc;
using server.Models;

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
    [Route("login")]
    public async Task<ActionResult> Login([FromBody] LoginRequest request)
    {
        Console.WriteLine(request.Username + request.Password);

        // if (username is null || password is null)
        // {
        //     return StatusCode(400);
        // }
        return Ok();
    }
}
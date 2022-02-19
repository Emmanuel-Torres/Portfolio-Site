using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> logger;
    private readonly IAuthService authService;
    private readonly ISessionDbService sessionDbService;

    public AuthController(ILogger<AuthController> logger, IAuthService authService, ISessionDbService sessionDbService)
    {
        this.logger = logger;
        this.authService = authService;
        this.sessionDbService = sessionDbService;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (await authService.ValidateAsync(request.Username, request.Password))
        {
            var cookieOptions = new CookieOptions
            {
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.Strict
            };

            var session = await sessionDbService.AddSessionAsync(new Session(HttpContext.Session.Id, request.Username));
            Response.Cookies.Append("session_id", session.SessionId, cookieOptions);
            return Ok();
        }
        else
        {
            return Unauthorized("Username or password were incorrect");
        }
    }

    [HttpPost]
    [Route("secure")]
    public async Task<IActionResult> Secure()
    {
        HttpContext.Request.Cookies.TryGetValue("session_id", out string? value);
        Console.WriteLine(value);
        return Ok(200);
    }
}
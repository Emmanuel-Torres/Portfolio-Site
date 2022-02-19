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

            if (string.IsNullOrEmpty(HttpContext.Session.GetString(request.Username)))
            {
                HttpContext.Session.SetString(request.Username, HttpContext.Session.Id);
            }

            string? sessionId = HttpContext.Session.GetString(request.Username);

            if (sessionId is null)
            {
                return StatusCode(500);
            }

            var session = await sessionDbService.AddSessionAsync(new Session(sessionId, request.Username));
            // Response.Cookies.Append("session_id", session.SessionId, cookieOptions);
            Response.Cookies.Append("username", request.Username, cookieOptions);
            return Ok();
        }
        else
        {
            return Unauthorized("Username or password were incorrect");
        }
    }

    [HttpGet]
    [Route("secure")]
    public async Task<IActionResult> Secure()
    {
        HttpContext.Request.Cookies.TryGetValue("session_id", out string? sessionId);
        HttpContext.Request.Cookies.TryGetValue("username", out string? username);
        
        if (sessionId is null || username is null)
        {
            return Forbid();
        }

        if (HttpContext.Session.GetString(username) is not null)
        {
            return Ok();
        }

        await sessionDbService.DeleteSessionAsync(username);
        return Forbid();
    }
}
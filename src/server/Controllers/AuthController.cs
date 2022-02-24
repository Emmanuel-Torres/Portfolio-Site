using System;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private const string SESSION_KEY_NAME = "_SessionId";
    private readonly ILogger<AuthController> logger;
    private readonly IAuthService authService;
    private readonly ISessionService sessionService;

    public AuthController(ILogger<AuthController> logger, IAuthService authService, ISessionService sessionService)
    {
        this.logger = logger;
        this.authService = authService;
        this.sessionService = sessionService;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        if (await authService.ValidateAsync(request.Username, request.Password))
        {
            var cookieOptions = new CookieOptions()
            {
                SameSite = SameSiteMode.Strict,
                HttpOnly = true,
                Secure = true
            };
            string sessionId = Guid.NewGuid().ToString();

            try
            {
                await sessionService.AddSessionAsync(sessionId, request.Username);
                Response.Cookies.Append(SESSION_KEY_NAME, sessionId, cookieOptions);
                return Ok();
            }
            catch (Exception ex)
            {
                logger.LogError("Could not add session for user {user}. Ex: {ex}", request.Username, ex);
                return StatusCode(500);
            }
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
        HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out string? sessionId);

        if (sessionId is null)
        {
            return StatusCode(403);
        }
        if (await sessionService.ValidateSessionAsync(sessionId))
        {
            return StatusCode(200);
        }

        return StatusCode(403);
    }
}
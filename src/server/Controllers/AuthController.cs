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
            var cookieOptions = new CookieOptions()
            {
                SameSite = SameSiteMode.Strict,
                HttpOnly = true,
                Secure = true
            };

            string sessionId = HttpContext.Session.Id;
            HttpContext.Session.SetString(SESSION_KEY_NAME, sessionId);
            await sessionDbService.AddSessionAsync(new Session(sessionId, request.Username));
            Response.Cookies.Append(SESSION_KEY_NAME, sessionId, cookieOptions);
            return Ok();
        }
        else
        {
            return Unauthorized("Username or password were incorrect");
        }
    }

    [HttpGet]
    [Route("validate")]
    public async Task<IActionResult> Validate()
    {
        if (!HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out string? sessionId))
        {
            return StatusCode(403);
        }
        if (string.IsNullOrEmpty(HttpContext.Session.GetString(SESSION_KEY_NAME)))
        {
            return StatusCode(403);
        }
        if (sessionId != HttpContext.Session.GetString(SESSION_KEY_NAME))
        {
            return StatusCode(403);
        }

        return Ok();
        // try
        // {
        //     HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out sessionId);
        //     HttpContext.Request.Cookies.TryGetValue("username", out username);
        // }
        // catch (Exception ex)
        // {
        //     logger.LogWarning("Could not get cookies from request. Ex: {ex}", ex);
        //     return Forbid();
        // }

        // Console.WriteLine(sessionId + " " + username);

        // if (sessionId is null || username is null)
        // {
        //     return Forbid();
        // }

        // // if (HttpContext.Session.GetString(username) is not null)
        // // {
        // //     return Ok();
        // // }

        // try
        // {
        //     await sessionDbService.DeleteSessionAsync(username);
        // }
        // catch (Exception ex)
        // {
        //     logger.LogError("Could not remove session for {user}. Ex: {ex}", username, ex);
        //     return StatusCode(500);
        // }

        // return Forbid();

    }
}
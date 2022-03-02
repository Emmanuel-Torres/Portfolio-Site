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

    public AuthController(ILogger<AuthController> logger,
                          IAuthService authService,
                          ISessionService sessionService
    )
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
                Response.Headers.Location = "/secure";
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

    [HttpDelete]
    [Route("logout")]
    public async Task<IActionResult> Logout()
    {
        HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out string? sessionId);

        try
        {
            if (await sessionService.IsSessionValidAsync(sessionId))
            {
                await sessionService.DeleteSessionAsync(sessionId!);
                var cookieOptions = new CookieOptions()
                {
                    SameSite = SameSiteMode.Strict,
                    HttpOnly = true,
                    Secure = true
                };

                Response.Cookies.Append(SESSION_KEY_NAME, "", cookieOptions);
                Response.Headers.Location = "/login";
                return Ok();
            }

            return BadRequest();
        }
        catch (Exception ex)
        {
            logger.LogError("Could not log user out. Ex {ex}", ex);
            return StatusCode(500);
        }
    }

    [HttpGet]
    [Route("secure")]
    public async Task<IActionResult> Secure()
    {
        HttpContext.Request.Cookies.TryGetValue(SESSION_KEY_NAME, out string? sessionId);

        try
        {
            if (await sessionService.IsSessionValidAsync(sessionId))
            {
                var username = (await sessionService.GetSessionBySessionIdAsync(sessionId!))?.Username;
                return Ok(username);
            }

            Response.Headers.Location = "/login";
            return StatusCode(403);
        }
        catch (Exception ex)
        {
            logger.LogError("Could not verify if session is valid. Ex {ex}", ex);
            return StatusCode(500);
        }
    }
}
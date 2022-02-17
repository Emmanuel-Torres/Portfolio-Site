using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> logger;
    private readonly IConfiguration configuration;
    private readonly IAuthService authService;

    public AuthController(ILogger<AuthController> logger, IConfiguration configuration, IAuthService authService)
    {
        this.logger = logger;
        this.configuration = configuration;
        this.authService = authService;
    }

    [HttpPost]
    [Route("login")]
    public async Task<ActionResult<string>> Login([FromBody] LoginRequest request)
    {
        var token = await authService.ValidateAsync(request.Username, request.Password);
        var cookieOptions = new CookieOptions
        {
            Secure = true,
            HttpOnly = true,
            SameSite = SameSiteMode.Strict
        };

        Response.Cookies.Append("auth", "test", cookieOptions);
        return Ok(token);
    }
}
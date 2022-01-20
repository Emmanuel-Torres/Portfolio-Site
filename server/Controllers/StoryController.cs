using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class StroyController : ControllerBase
{
    private readonly ILogger<StroyController> _logger;

    public StroyController(ILogger<StroyController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public string Get()
    {
        return "Hello World";
    }
}
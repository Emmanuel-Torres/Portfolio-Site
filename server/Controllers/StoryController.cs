using Microsoft.AspNetCore.Mvc;
using server.Models;

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

    

    // [HttpGet]
    // [Route("Hello")]
    // public string GetHello()
    // {
    //     return "Hello World";
    // }

    // [HttpPost]
    // [Route("Hello")]
    // public string PostHello(Story story)
    // {
    //     return "Foo";
    // }
}
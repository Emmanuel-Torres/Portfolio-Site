using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace server.Models;

[Index(nameof(SessionId), nameof(Username), IsUnique = true)]
public class Session 
{
    public int? Id { get; set; }
    public string SessionId { get; set; }
    public string Username { get; set; }
    public DateTime Expiration { get; set; }

    [JsonConstructor]
    public Session(string sessionId, string username, DateTime expiration, int? id)
    {
        SessionId = sessionId;
        Username = username;
        Expiration = expiration;
        Id = id;
    }

    public Session(string sessionId, string username, DateTime expiration)
    {
        SessionId = sessionId;
        Username = username;
        Expiration = expiration;
    }
}
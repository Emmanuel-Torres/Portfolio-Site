using System.Text.Json.Serialization;

namespace server.DbModels.Models;

public class Story
{
    public required string Id { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public required DateTime PostedOn { get; set; }
    public string? ThumbnailUrl { get; set; }
}
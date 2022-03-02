using System.Text.Json.Serialization;

namespace server.Models;

public class Story
{
    public int? Id { get; set; }
    public string Title { get; set; }
    public string? Content { get; set; }
    public DateTime PostedOn { get; set; }
    public string? MainImageUrl { get; set; }
    public string? Tags { get; set; }

    public Story(string title, DateTime postedOn)
    {
        this.Title = title;
        this.PostedOn = postedOn;
    }

    [JsonConstructor]
    public Story(int? id, string title, string? content, DateTime postedOn, string? mainImageUrl, string? tags)
    {
        this.Id = id;
        this.Title = title;
        this.Content = content;
        this.PostedOn = postedOn;
        this.MainImageUrl = mainImageUrl;
        this.Tags = tags;
    }
}
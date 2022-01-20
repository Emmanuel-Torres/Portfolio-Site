namespace server.Models;

public class Story
{
    public int? Id { get; set; }
    public string Title { get; set; }
    public string? MainImageUrl { get; set; }
    public string? Content { get; set; }
    public string Categoty { get; set; }
    public DateTime PostedOn { get; set; }

    public Story(string title, string category, DateTime postedOn, int id = -1, string? mainImageUrl = null, string? content = null)
    {
        this.Title = title;
        this.Categoty = category;
        this.PostedOn = postedOn;
        this.Id = id;
        this.MainImageUrl = mainImageUrl;
        this.Content = content;
    }
}
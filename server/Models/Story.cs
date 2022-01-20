namespace server.Models;

public class Story
{
    public int? ID { get; set; }
    public string Title { get; set; }
    public string? MainImageUrl { get; set; }
    public string? Content { get; set; }
    public string Categoty { get; set; }
    public DateTime PostedOn { get; set; }

    public Story(string title, string category, string postedOn)
    {
        this.Title = title;
        this.Categoty = category;
        this.PostedOn = postedOn;
    }
}
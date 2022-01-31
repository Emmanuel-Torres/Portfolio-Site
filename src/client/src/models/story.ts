export default class Story {
    Id?: number;
    Title: string;
    Content?: string;
    PostedOn?: string;
    MainImageUrl?: string;
    Tags?: string;

    constructor(
        title: string,
        content?: string,
        mainImageUrl?: string,
        tags?: string,
        story_id?: number,
        postedOn?: string,
    ) {
        this.Id = story_id;
        this.Title = title;
        this.Content = content;
        this.PostedOn = postedOn;
        this.MainImageUrl = mainImageUrl;
        this.Tags = tags;
    }
}
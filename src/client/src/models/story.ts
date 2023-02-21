export default class Story {
    id?: string;
    title: string;
    content?: string;
    postedOn: string;
    mainImageUrl?: string;
    tags?: string;

    constructor(
        title: string,
        postedOn: string,
        content?: string,
        mainImageUrl?: string,
        tags?: string,
        story_id?: string,
    ) {
        this.id = story_id;
        this.title = title;
        this.content = content;
        this.postedOn = postedOn;
        this.mainImageUrl = mainImageUrl;
        this.tags = tags;
    }
}
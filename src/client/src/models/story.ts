export default class Story {
    story_id?: number;
    story_title: string;
    story_content?: string;
    story_posted_on?: string;
    story_main_image_url?: string;
    story_tags?: string;

    constructor(
        story_title: string,
        story_content?: string,
        story_posted_on?: string,
        story_main_image_url?: string,
        story_tags?: string,
        story_id?: number,
    ) {
        this.story_id = story_id;
        this.story_title = story_title;
        this.story_content = story_content;
        this.story_posted_on = story_posted_on;
        this.story_main_image_url = story_main_image_url;
        this.story_tags = story_tags;
    }
}
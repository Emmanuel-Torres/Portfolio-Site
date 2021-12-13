import Image from "./image";
import Step from "./step";

export default class Story {
    story_id?: number;
    story_title: string;
    story_image?: Image;
    story_posted_on: string;
    story_steps: Step[];

    constructor(
        story_title: string,
        story_posted_on: string,
        story_steps: Step[],
        story_image?: Image,
        story_id?: number,
    ) {
        this.story_id = story_id;
        this.story_title = story_title;
        this.story_image = story_image;
        this.story_posted_on = story_posted_on;
        this.story_steps = story_steps;
    }
}
import Step from "./step";

export default class Story {
    story_title?: string;
    story_posted_on?: string;
    story_steps?: Step[];

    constructor(
        story_title?: string,
        story_posted_on?: string,
        story_steps?: Step[]
    ) {
        this.story_title = story_title;
        this.story_posted_on = story_posted_on;
        this.story_steps = story_steps;
    }
}
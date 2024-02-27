export default class Story {
    id: string;
    title: string;
    skills: string;
    postedOn: string;
    content: string;

    constructor(
        id: string,
        title: string,
        skills: string,
        postedOn: string,
        content: string,
    ) {
        this.id = id;
        this.title = title;
        this.skills = skills;
        this.postedOn = postedOn;
        this.content = content;
    }
}
export default class Blog {
    title: string;
    skills: string;
    postedOn: string;
    file: string;

    constructor(
        title: string,
        skills: string,
        postedOn: string,
        file: string,
    ) {
        this.title = title;
        this.skills = skills;
        this.postedOn = postedOn;
        this.file = file;
    }
}
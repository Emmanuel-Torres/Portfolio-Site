export default class Project {
    id: string;
    name: string;
    description: string;
    url: string;
    imageUrl: string;

    constructor(
        id: string,
        name: string,
        description: string,
        url: string,
        imageUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
    }
}
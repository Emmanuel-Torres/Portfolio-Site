export default class Tag {
    tag_id?: number;
    tag_title: string;

    constructor(
        tag_title?: string,
        tag_id?: number
    ) {
        this.tag_id = tag_id;
        this.tag_title = tag_title ?? '';
    }
}
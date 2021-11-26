export default class Image {
    image_id?: number;
    image_title?: string;
    image_caption?: string;
    image_url?: string;

    constructor(
        image_id?: number,
        image_title?: string,
        image_caption?: string,
        image_url?: string
    ) {
        this.image_id = image_id;
        this.image_title = image_title;
        this.image_caption = image_caption;
        this.image_url = image_url;
    }
}
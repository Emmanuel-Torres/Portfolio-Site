export default class Image {
    image_id?: number;
    image_title: string;
    image_caption: string;
    image_url: string;

    constructor(
        image_title?: string,
        image_caption?: string,
        image_url?: string,
        image_id?: number,
    ) {
        this.image_id = image_id;
        this.image_title = image_title ?? '';
        this.image_caption = image_caption ?? '';
        this.image_url = image_url ?? '';
    }
}
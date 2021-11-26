import Image from "./image";

export default class Step {
    step_id?: number;
    step_title: string;
    step_content: string;
    step_position?: number;
    step_images: Image[];

    constructor(
        step_title?: string,
        step_content?: string,
        step_position?: number,
        step_images?: Image[],
        step_id?: number
    ) {
        this.step_id = step_id;
        this.step_title = step_title ?? '';
        this.step_content = step_content ?? '';
        this.step_position = step_position;
        this.step_images = step_images ?? [];
    }
}
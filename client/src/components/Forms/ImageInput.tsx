import { FC, FocusEvent } from "react"
import { useDispatch } from "react-redux";
import { useStoreSelector } from "../../store";
import { changeImageTitle, changeImageUrl } from "../../store/story-form-slice";

type Props = {
    step_position: number,
    image_position: number
}

const ImageInput: FC<Props> = (props): JSX.Element => {
    const image = useStoreSelector(state => state.storyForm.story.story_steps[props.step_position].step_images[props.image_position]);
    const dispatch = useDispatch();

    const imageTitleChangedHandler = (event: FocusEvent<HTMLInputElement>) => {
        dispatch(changeImageTitle({ step_position: props.step_position, image_position: props.image_position, title: event.target.value }));
    }

    const imageUrlChangedHandler = (event: FocusEvent<HTMLInputElement>) => {
        dispatch(changeImageUrl({ step_position: props.step_position, image_position: props.image_position, url: event.target.value }));
    }

    return (
        <>
            <br />
            <label>Image Title</label>
            <br />
            <input type='text' value={image.image_title} onChange={imageTitleChangedHandler} />
            <br />
            <label>Image URL</label>
            <br />
            <input type='text' value={image.image_url} onChange={imageUrlChangedHandler} />
        </>
    )
};

export default ImageInput;
import { FC, FocusEvent } from "react"
import { useDispatch } from "react-redux";
import { useStoreSelector } from "../../store";
import { changeImageCaption, changeImageTitle, changeImageUrl } from "../../store/story-form-slice";

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

    const imageCaptionChangedHandler = (event: FocusEvent<HTMLInputElement>) => {
        dispatch(changeImageCaption({ step_position: props.step_position, image_position: props.image_position, caption: event.target.value }))
    }

    return (
        <div className="border bg-light border-secondary p-2 my-2">
            <p className='fw-bold'>Image #{props.image_position + 1}</p>
            <label className='form-label'>Image Title</label>
            <input className='form-control' type='text' value={image.image_title} onChange={imageTitleChangedHandler} />
            <label className='form-label'>Image URL</label>
            <input className='form-control' type='text' value={image.image_url} onChange={imageUrlChangedHandler} />
            <label className='form-label'>Image Caption</label>
            <input className='form-control' type='text' value={image.image_caption} onChange={imageCaptionChangedHandler} />
        </div>
    )
};

export default ImageInput;
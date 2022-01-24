import { FC, FocusEvent } from "react";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "../../store";
import { addImage, changeStepContent, changeStepTitle } from "../../store/story-form-slice";
import ImageInput from "./ImageInput";

type Props = {
    step_position: number
}

const StepInput: FC<Props> = (props): JSX.Element => {
    const step = useStoreSelector(state => state.storyForm.story.story_steps[props.step_position])
    const dispatch = useDispatch();

    const stepTitleChanged = (event: FocusEvent<HTMLInputElement>) => {
        dispatch(changeStepTitle({ position: props.step_position, title: event.target.value }));
    }

    const stepContentChanged = (event: FocusEvent<HTMLTextAreaElement>) => {
        dispatch(changeStepContent({ step_position: props.step_position, content: event.target.value }));
    }

    const addImageHandler = () => {
        dispatch(addImage(props.step_position));
    }

    return (
        <div className="border border-secondary p-2 mb-2">
            <p className='fw-bold'>Step #{props.step_position + 1}</p>
            <label className='form-label'>Step Title</label>
            <input className='form-control' type='text' value={step.step_title} onChange={stepTitleChanged} />
            <label className='form-label'>Step Content</label>
            <textarea className='form-control' value={step.step_content} onChange={stepContentChanged} />
            {step.step_images.map((_, index) => <ImageInput key={index} step_position={props.step_position} image_position={index} />)}
            <button className='btn btn-primary mt-2' type='button' onClick={addImageHandler}>Add Image</button>
        </div>
    )
}

export default StepInput;
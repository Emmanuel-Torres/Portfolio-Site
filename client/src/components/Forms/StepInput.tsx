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
        dispatch(changeStepContent({ position: props.step_position, content: event.target.value }));
    }

    const addImageHandler = () => {
        dispatch(addImage(props.step_position));
    }

    return (
        <>
            <br />
            <label>Step Title</label>
            <br />
            <input type='text' value={step.step_title} onChange={stepTitleChanged} />
            <br />
            <label>Step Content</label>
            <br />
            <textarea value={step.step_content} onChange={stepContentChanged} />
            <br />
            <button type='button' onClick={addImageHandler}>Add Image</button>
            {step.step_images.map((i, index) => <ImageInput key={index} image={i} />)}
        </>
    )
}

export default StepInput;
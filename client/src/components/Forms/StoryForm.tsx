import { FocusEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useStoreSelector } from "../../store";
import { addStep, changeStoryTitle } from "../../store/story-form-slice";
import StepInput from "./StepInput";

const StoryForm = () => {
    const dispatch = useDispatch();
    const story = useStoreSelector(state => state.storyForm.story)

    const storyTitleChangedHandler = (event: FocusEvent<HTMLInputElement>) => {
        dispatch(changeStoryTitle(event.target.value));
    };

    const addStepHandler = () => {
        dispatch(addStep());
    }

    const submitStoryHandler = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitStoryHandler}>
            <label htmlFor='story-title'>Story Title</label>
            <br/>
            <input type='text' name='story-title' value={story.story_title} onChange={storyTitleChangedHandler}/>
            <br/>
            <button type='button' onClick={addStepHandler}>Add Step</button>
            <br/>
            {story.story_steps.map((s, index) => <StepInput key={index} step_position={index}/>)}
            <br />
            <button type='button'>Cancel</button>
            <button type='submit'>Create Story</button>
        </form>
    )
}

export default StoryForm;
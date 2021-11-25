import { useState } from "react";
import StepInput from "./StepInput";

const StoryForm = () => {
    const [steps, setSteps] = useState([]);

    const addStepHandler = () => {
        setSteps(prev => [...prev, <StepInput />])
    }

    const submitStoryHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitStoryHandler}>
            <label htmlFor='story-title'>Story Title</label>
            <input type='text' name='story-title' />
            <button type='button' onClick={addStepHandler}>Add Step</button>
            {steps.map(s => s)}
            <button type='button'>Cancel</button>
            <button type='submit'>Create Story</button>
        </form>
    )
}

export default StoryForm;
import { useState } from "react";
import StepInput from "./StepInput";

const StoryForm = () => {
    

    const submitStoryHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitStoryHandler}>
            <label htmlFor='story-title'>Story Title</label>
            <input type='text' name='story-title' />
            <button type='button' onClick={null}>Add Step</button>
            <br/>
            <button type='button'>Cancel</button>
            <button type='submit'>Create Story</button>
        </form>
    )
}

export default StoryForm;
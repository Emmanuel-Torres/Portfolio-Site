import { createSlice } from "@reduxjs/toolkit";
import Step from "../models/step";
import Story from "../models/story";

interface StoryFormState {
    story: Story
}

const initialState: StoryFormState = {
    story: undefined
}

const storyFormSlice = createSlice({
    name: 'create-story',
    initialState,
    reducers: {
        addStep(state) {
            state.story.story_steps.push(new Step())
        },
        addImage(state, action) {

        }
    }
})
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Image from "../models/image";
import Step from "../models/step";
import Story from "../models/story";

interface StoryFormState {
    story: Story
}

const initialState: StoryFormState = {
    story: new Story()
}

export const addStory = createAsyncThunk(
    'addStory',
    async (story: Story, thunkApi) => {

    }
)

const storyFormSlice = createSlice({
    name: 'create-story',
    initialState,
    reducers: {
        addStep(state) {
            state.story.story_steps.push(new Step())
        },
        addImage(state, action) {
            state.story.story_steps[action.payload].step_images.push(new Image())
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addStory.fulfilled, (state, action) => {

            })
    }
})

export default storyFormSlice;
export const { addStep, addImage } = storyFormSlice.actions;
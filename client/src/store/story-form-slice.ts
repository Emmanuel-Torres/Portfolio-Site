import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Image from "../models/image";
import Step from "../models/step";
import Story from "../models/story";
import apiService from "../services/api-service";

interface StoryFormState {
    story: Story
}

const initialState: StoryFormState = {
    story: {
        story_title: '',
        story_steps: [],
        story_id: undefined,
        story_posted_on: ''
    }
}

export const addStory = createAsyncThunk(
    'addStory',
    async (story: Story, thunkApi) => {
        return await apiService.addStory(story);
    }
)

const storyFormSlice = createSlice({
    name: 'create-story',
    initialState,
    reducers: {
        addStep(state) {
            const newStep: Step = {
                step_id: undefined,
                step_title: '',
                step_content: '',
                step_position: state.story.story_steps.length,
                step_images: []
            }
            state.story.story_steps.push(newStep);
        },
        addImage(state, action) {
            const newImage: Image = {
                image_id: undefined,
                image_title: '',
                image_caption: '',
                image_url: ''
            }
            state.story.story_steps[action.payload].step_images.push(newImage);
        },
        changeStoryTitle(state, action: PayloadAction<string>) {
            state.story.story_title = action.payload;
        },
        changeStepTitle(state, action: PayloadAction<{ position: number, title: string }>) {
            state.story.story_steps[action.payload.position].step_title = action.payload.title;
        },
        changeStepContent(state, action: PayloadAction<{ position: number, content: string }>) {
            state.story.story_steps[action.payload.position].step_content = action.payload.content;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addStory.fulfilled, (state, action) => {
                state.story = action.payload;
            })
            .addCase(addStory.rejected, (state, action) => {
                console.error('Something went wrong.')
            })
    }
})

export default storyFormSlice;
export const { addStep, addImage, changeStoryTitle, changeStepTitle, changeStepContent } = storyFormSlice.actions;
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
    async (story: Story, thunkApi): Promise<Story> => {
        return await apiService.addStory(story);
    }
)

const storyFormSlice = createSlice({
    name: 'create-story',
    initialState,
    reducers: {
        setStory(state, action: PayloadAction<Story>) {
            state.story = action.payload;
        },
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
        addImage(state, action: PayloadAction<number>) {
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
        changeStepContent(state, action: PayloadAction<{ step_position: number, content: string }>) {
            state.story.story_steps[action.payload.step_position].step_content = action.payload.content;
        },
        changeImageTitle(state, action: PayloadAction<{ step_position: number, image_position: number, title: string }>) {
            state.story.story_steps[action.payload.step_position]
                .step_images[action.payload.image_position].image_title = action.payload.title
        },
        changeImageUrl(state, action: PayloadAction<{ step_position: number, image_position: number, url: string }>) {
            state.story.story_steps[action.payload.step_position]
                .step_images[action.payload.image_position].image_url = action.payload.url
        },
        changeImageCaption(state, action: PayloadAction<{ step_position: number, image_position: number, caption: string }>) {
            state.story.story_steps[action.payload.step_position]
                .step_images[action.payload.image_position].image_caption = action.payload.caption
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addStory.fulfilled, (state) => {
                state.story = initialState.story;
            })
            .addCase(addStory.rejected, () => {
                console.error('Something went wrong.')
            })
    }
})

export default storyFormSlice;
export const { 
    addStep,
    addImage, 
    changeStoryTitle, 
    changeStepTitle, 
    changeStepContent, 
    changeImageTitle,
    changeImageUrl,
    changeImageCaption
} = storyFormSlice.actions;
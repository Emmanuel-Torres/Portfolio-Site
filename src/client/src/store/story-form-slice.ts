import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Story from "../models/story";
import apiService from "../services/api-service";

interface StoryFormState {
    story: Story
}

const initialState: StoryFormState = {
    story: {
        Id: undefined,
        Title: '',
        Content: undefined,
        PostedOn: undefined,
        MainImageUrl: undefined,
        Tags: undefined
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
    setStory
} = storyFormSlice.actions;
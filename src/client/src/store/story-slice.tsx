import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Story from '../models/story';
import apiService from '../services/api-service'

export const getStories = createAsyncThunk(
    'getStories',
    async (args, thunkAPI) => {
        return await apiService.getStories();
    }
);

export const getStoryById = createAsyncThunk(
    'getStoryById',
    async (storyId: number, thunkAPI) => {
        return await apiService.getStoryById(storyId);
    }
);

interface StoryState {
    stories: Story[],
    currentStory?: Story
};

const initialState: StoryState = {
    stories: [],
    currentStory: undefined
};

const storySlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getStories.fulfilled, (state, action) => {
                state.stories = action.payload;
            })
            .addCase(getStoryById.fulfilled, (state, action) => {
                state.currentStory = action.payload;
            })
    }
});

export default storySlice;
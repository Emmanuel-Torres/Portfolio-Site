import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Story from '../models/story';
import Tag from '../models/tag';
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

export const getTags = createAsyncThunk(
    'getTags',
    async (args, thunkAPI) => {
        return await apiService.getTags();
    }
);

interface StoryState {
    tags: Tag[],
    stories: Story[],
    currentStory?: Story
};

const initialState: StoryState = {
    tags: [],
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
            .addCase(getTags.fulfilled, (state, action) => {
                state.tags = action.payload;
            })
    }
});

export default storySlice;
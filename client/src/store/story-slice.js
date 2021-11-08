import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../services/api-service'

export const getStories = createAsyncThunk(
    'getStories',
    async (args, thunkAPI) => {
        return await apiService.getStories();
    }
);

export const getStoryById = createAsyncThunk(
    'getStoryById',
    async (storyId, thunkAPI) => {
        return await apiService.getStoryById(storyId);
    }
);

export const getTags = createAsyncThunk(
    'getTags',
    async (args, thunkAPI) => {
        return await apiService.getTags();
    }
);

const storySlice = createSlice({
    name: 'stories',
    initialState: {
        tags: [],
        stories: [],
        currentStory: {}
    },
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
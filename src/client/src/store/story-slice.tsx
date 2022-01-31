import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Story from '../models/story';
import apiService from '../services/api-service'

export const getStories = createAsyncThunk(
    'getStories',
    async (args, thunkAPI): Promise<Story[]> => {
        return await apiService.getStories();
    }
);

export const addStory = createAsyncThunk(
    'addStory',
    async (story: Story, thunkAPI): Promise<Story> => {
        return await apiService.addStory(story);
    }
)

export const getStoryById = createAsyncThunk(
    'getStoryById',
    async (storyId: number, thunkAPI): Promise<Story> => {
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
            .addCase(getStories.fulfilled, (state, action: PayloadAction<Story[]>) => {
                state.stories = action.payload;
            })
            .addCase(getStoryById.fulfilled, (state, action: PayloadAction<Story>) => {
                state.currentStory = action.payload;
            })
            .addCase(addStory.fulfilled, (state, action: PayloadAction<Story>) => {
                state.currentStory = action.payload;
            })
    }
});

export default storySlice;
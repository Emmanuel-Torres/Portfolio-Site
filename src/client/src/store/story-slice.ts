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
);

export const getStoryById = createAsyncThunk(
    'getStoryById',
    async (storyId: number, thunkAPI): Promise<Story> => {
        return await apiService.getStoryById(storyId);
    }
);

export const deleteStory = createAsyncThunk(
    'deleteStory',
    async (storyId: number, thunkAPI): Promise<Story[]> => {
        await apiService.deleteStory(storyId);
        return await apiService.getStories();
    }
)

export const updateStory = createAsyncThunk(
    'updateStory',
    async (args: { storyId: number, story: Story }, thunkAPI): Promise<Story> => {
        return await apiService.updateStory(args.storyId, args.story);
    }
)

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
        clearCurrentStory (state) {
            state.currentStory = undefined;
        },
        setCurrentStory (state, action: PayloadAction<Story>) {
            state.currentStory = action.payload;
        }
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
            .addCase(deleteStory.fulfilled, (state, action: PayloadAction<Story[]>) => {
                state.stories = action.payload;
            })
    }
});

export const {
    clearCurrentStory,
    setCurrentStory
} = storySlice.actions;

export default storySlice;
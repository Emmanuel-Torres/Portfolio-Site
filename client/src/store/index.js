import { configureStore } from '@reduxjs/toolkit'
import storyFormSlice from './story-form-slice';

import storySlice from './story-slice';

const store = configureStore({
    reducer: { story: storySlice.reducer, storyForm: storyFormSlice.reducer }
});

export default store;
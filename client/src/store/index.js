import { configureStore } from '@reduxjs/toolkit'

import storySlice from './story-slice';

const store = configureStore({
    reducer: { story: storySlice.reducer }
});

export default store;
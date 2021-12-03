import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import storyFormSlice from './story-form-slice';

import storySlice from './story-slice';

export const store = configureStore({
    reducer: { story: storySlice.reducer, storyForm: storyFormSlice.reducer }
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
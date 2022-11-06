import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from '../slices/pagesSlice';
import compReducer from '../slices/componentSlice';

export const store = configureStore({
    reducer: {
        pages: pagesReducer,
        comps: compReducer
    }
})
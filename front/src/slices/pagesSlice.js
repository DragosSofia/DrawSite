import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    pages: [],
    error: null
}

export const addPages = createAsyncThunk('posts/addNewPages', async (initialPost) => {
    const response = await axios.post(POSTS_URL, initialPost)
    return response.data
})

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    redicers: {
        addPages: {
            reducer(state, action) {
                state.pages.push(action.payload)
            },
        prepare(title, file) {
            return {
                payload: {
                    title,
                    file
                    }
                }
            }
        },
    }
})

export const selectAllPages = (state) => state.pages.pages;
export const getPagesError = (state) => state.pages.error;

export const { pagesAdded } = pagesSlice.actions

export default pagesSlice.reducer
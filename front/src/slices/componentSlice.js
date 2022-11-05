import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchComponents = createAsyncThunk('user')
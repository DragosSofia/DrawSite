import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";



const initialState = []

export const fetchComponents = createAsyncThunk('user')
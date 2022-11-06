import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

const GET_URL = "http://localhost:8080/get";

const initialState = {
    components: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchComp = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(GET_URL)
    return response.data
})

const compSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        compAdded: {
            reducer(state, action) {
                state.comps = action.payload
            },
            prepare(type, x, y, w, l, opt) {
                return {
                    payload: {
                        id: nanoid(),
                        type,
                        x,
                        y,
                        w,
                        l,
                        opt
                    }
                }
            }
        },
            updateComp(state, action) {
                let {id, opt} = action.payload
                console.log(opt)
                if(state.components[id - 1].type === "img"){
                    opt = "../images/img-8.jpg"
                }
                console.log(opt)
                state.components[id - 1].opt = opt
            }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComp.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchComp.fulfilled, (state, action) => {
                state.status = 'succed'
                let crt = 0;
                const loadedComp = action.payload.map(comp => {
                    let { upLeftCorner, height, width, type} = comp, t;
                    let {x, y} = upLeftCorner;
                    crt++;
                    x = x;
                    y = y ;
                    width = width ;
                    height = height ;

                    switch (type) {
                        case "H": 
                            t = "header";
                            break;
                        case "P":
                            t = "img";
                            break;
                        case "T":
                            t = "text";
                            break;
                        default:
                            t = "text";
                            break
                    }

                   
                    
                    return {
                        id: crt,
                        type : t,
                        x,
                        y,
                        w : width,
                        l : height,
                        opt : null
                    };
                });

                state.components = loadedComp
            })
            .addCase(fetchComp.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})


export const selectAllComp = (state) => state.comps.components;

export const selectCompById = (state, id) =>

    state.comps.find(components => components.id === id);


export const { compAdded, updateComp } = compSlice.actions;

export default compSlice.reducer;

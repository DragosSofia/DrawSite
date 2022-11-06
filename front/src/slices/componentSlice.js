import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
components: [
    {
        id: 1,
        type: "text",
        x: 100,
        y: 200,
        w: 100,
        l: 50,
        opt: "Ana are mere si pere de calitate"
    },
    {
        id: 2,
        type: "text",
        x: 200,
        y: 300,
        w: 100,
        l: 50,
        opt: "efefef"
    },
    {
        id: 3,
        type: "img",
        x: 500,
        y: 400,
        w: 100,
        l: 50,
        opt: "./images/img_01"
    },
    {
        id: 4,
        type: "carusel",
        x: 0,
        y: 0,
        w: 100,
        l: 50,
        opt: "./videoes/vid_02"
    },
    ]
}

const compSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        compAdded: {
            reducer(state, action) {
                state.components.push(action.payload)
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
                const {id, opt} = action.payload
                console.log(opt)
                state.components[id - 1].opt = opt
            }
    }
})


export const selectAllComp = (state) => state.comps.components;

export const selectCompById = (state, id) =>

    state.comps.find(components => components.id === id);


export const { compAdded, updateComp } = compSlice.actions;

export default compSlice.reducer;

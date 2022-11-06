import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  components: [
    {
      id: "1",
      type: "text",
      x: 100,
      y: 1,
      w: 0,
      l: 100,
      opt: "Ana are mere si pere de calitate",
    },
    {
      id: "2",
      type: "text",
      x: 1,
      y: 20,
      w: 10,
      l: 50,
      opt: "efefef",
    },
    {
      id: "3",
      type: "img",
      x: 20,
      y: 20,
      w: 10,
      l: 5,
      opt: "../images/img-1.jpg",
    },
    {
      id: "4",
      type: "img",
      x: 2,
      y: 20,
      w: 10,
      l: 5,
      opt: "../images/img-7.jpg",
    },
  ],
};

const compSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    compAdded: {
      reducer(state, action) {
        state.push(action.payload);
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
            opt,
          },
        };
      },
    },
    updateComp(state, { id, opt }) {
      state.find((components) => components.id === id).opt = opt;
    },
  },
});

export const selectAllComp = (state) => state.comps.components;

export const selectCompById = (state, id) =>
  state.components.components.find((components) => components.id === id);

export const { compAdded, updateComp } = compSlice.actions;

export default compSlice.reducer;

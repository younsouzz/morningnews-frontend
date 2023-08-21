import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: "hiddenArticles",
  initialState,
  reducers: {
    addHiddenArticles: (state, action) => {
      state.value.push(action.payload);
    },
    removeArticles: (state) => {
      state.value = [];
    },
  },
});

export const { addHiddenArticles, removeArticles } =
  hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

import { getAllCampers, getOneCamper } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: [],
    current: {},
    modal: false,
    loading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getOneCamper.pending, handlePending)
      .addCase(getOneCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.current = action.payload;
      })
      .addCase(getOneCamper.rejected, handleRejected),

  reducers: {
    switchModal(state, action) {
      console.log(action.payload);
      state.modal = action.payload;
    },
    addCamperToFavorites(state, action) {
      console.log(action.payload);
      state.favorites.push(action.payload);
    },
    removeCamperFromFavorites(state, action) {
      console.log(action.payload);
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { switchModal, addCamperToFavorites, removeCamperFromFavorites } =
  campersSlice.actions;

console.dir(addCamperToFavorites);
console.dir(removeCamperFromFavorites);

export default campersSlice.reducer;

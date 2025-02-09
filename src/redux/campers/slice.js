import { createSlice } from "@reduxjs/toolkit";

import { getFirstCampers, getOneCamper, getRestCampers } from "./operations";

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
      .addCase(getFirstCampers.pending, handlePending)
      .addCase(getFirstCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getFirstCampers.rejected, handleRejected)
      .addCase(getRestCampers.pending, handlePending)
      .addCase(getRestCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(getRestCampers.rejected, handleRejected)
      .addCase(getOneCamper.pending, handlePending)
      .addCase(getOneCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.current = action.payload;
      })
      .addCase(getOneCamper.rejected, handleRejected),

  reducers: {
    switchModal(state, action) {
      state.modal = action.payload;
    },
    addCamperToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeCamperFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { switchModal, addCamperToFavorites, removeCamperFromFavorites } =
  campersSlice.actions;

export default campersSlice.reducer;

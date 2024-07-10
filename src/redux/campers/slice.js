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
      state.modal = action.payload;
    },
  },
});

export const { switchModal } = campersSlice.actions;

export default campersSlice.reducer;

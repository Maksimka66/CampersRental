import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://668824620bc7155dc01a96fc.mockapi.io";

export const renderCampers = createAsyncThunk(
  "campers/showAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

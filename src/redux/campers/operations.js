import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://668824620bc7155dc01a96fc.mockapi.io";

export const getAllCampers = createAsyncThunk(
  "campers/showAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");

      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneCamper = createAsyncThunk(
  "campers/showOne",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/advert/${camperId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

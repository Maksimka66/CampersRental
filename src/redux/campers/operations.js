import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://668824620bc7155dc01a96fc.mockapi.io";

let page = 1;
let limit = 4;

export const getFirstCampers = createAsyncThunk(
  "campers/showAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert?page=1&limit=4");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRestCampers = createAsyncThunk(
  "campers/showRest",
  async (_, thunkAPI) => {
    const params = new URLSearchParams({ page: (page += 1), limit });

    try {
      const response = await axios.get("/advert", { params });

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

export const addToFavorites = createAsyncThunk(
  "campers/addToFavorites",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.post("/advert", { camperId });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "campers/removeFromFavorites",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.delete(`/advert/${camperId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

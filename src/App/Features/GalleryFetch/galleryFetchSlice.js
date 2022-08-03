import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const galleryFetch = createAsyncThunk(
  "gallery/galleryFetch",
  async () => {
    const res = await axios.get("http://localhost:5000/picture");
    return res.data;
  }
);
const galleryFetchSlice = createSlice({
  name: "gallery",
  initialState: {
    isLoading: false,
    pictures: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(galleryFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(galleryFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pictures = action.payload;
      state.error = null;
    });
    builder.addCase(galleryFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.pictures = [];
      state.error = action.error.message;
    });
  },
});
export default galleryFetchSlice.reducer;

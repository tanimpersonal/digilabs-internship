import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const galleryFetch=createAsyncThunk('gallery/galleryFetch', async()=>{
    const res= 
}) 
const galleryFetchSlice = createSlice({
  name: "gallery",
  initialState: {
    isLoading: false,
    pictures: [],
    error: null,
  },
  extraReducers: builder=>{
    builder.addCase()
  }
});

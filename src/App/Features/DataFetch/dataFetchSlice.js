import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:5000/notices";
export const fetchNotices = createAsyncThunk("data/fetchNotices", async () => {
  const res = await axios.get(url);
  return res.data;
});
const dataFetchSlice = createSlice({
  name: "notices",
  initialState: {
    isLoading: false,
    notices: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notices = action.payload;
      state.error = null;
    });
    builder.addCase(fetchNotices.rejected, (state, action) => {
      state.isLoading = false;
      state.notices = [];
      state.error = action.error.message;
    });
  },
});
export default dataFetchSlice.reducer;

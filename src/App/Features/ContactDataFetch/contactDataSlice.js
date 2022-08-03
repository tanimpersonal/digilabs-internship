import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const contactFetch = createAsyncThunk(
  "contact/contactFetch",
  async () => {
    const res = await axios.get("http://localhost:5000/contactData");
    return res.data;
  }
);
const contactDataSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    contacts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(contactFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(contactFetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    });
    builder.addCase(contactFetch.rejected, (state, action) => {
      state.isLoading = false;
      state.contacts = [];
      state.error = action.error.message;
    });
  },
});
export default contactDataSlice.reducer;

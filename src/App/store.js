import { configureStore } from "@reduxjs/toolkit";
import dataFetchSlice from "./Features/DataFetch/dataFetchSlice";

const store = configureStore({
  reducer: {
    notices: dataFetchSlice,
  },
});
export default store;

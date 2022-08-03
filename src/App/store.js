import { configureStore } from "@reduxjs/toolkit";
import dataFetchSlice from "./Features/DataFetch/dataFetchSlice";
import galleryFetchSlice from "./Features/GalleryFetch/galleryFetchSlice";

const store = configureStore({
  reducer: {
    notices: dataFetchSlice,
    gallery: galleryFetchSlice,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import contactDataSlice from "./Features/ContactDataFetch/contactDataSlice";
import dataFetchSlice from "./Features/DataFetch/dataFetchSlice";
import galleryFetchSlice from "./Features/GalleryFetch/galleryFetchSlice";

const store = configureStore({
  reducer: {
    notices: dataFetchSlice,
    gallery: galleryFetchSlice,
    contact: contactDataSlice,
  },
});
export default store;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { galleryFetch } from "../../App/Features/GalleryFetch/galleryFetchSlice";
import SingleGallery from "../SingleGallery/SingleGallery";

const Gallery = () => {
  const { isLoading, error, pictures } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(galleryFetch());
  }, []);

  return (
    <div>
      {isLoading && (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      <div className="grid grid-cols-3">
        {pictures &&
          pictures.map((picture) => (
            <SingleGallery key={picture._id} image={picture}></SingleGallery>
          ))}
      </div>
    </div>
  );
};

export default Gallery;

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { galleryFetch } from "../../App/Features/GalleryFetch/galleryFetchSlice";

const GalleryAdmin = () => {
  const dispatch = useDispatch();
  const { isLoading, error, pictures } = useSelector((state) => state.gallery);
  useEffect(() => {
    dispatch(galleryFetch());
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/picture/${id}`)
      .then(dispatch(galleryFetch()));
  };
  return (
    <div className="grid grid-cols-5 gap-2">
      {pictures.map((picture) => (
        <div>
          <img src={picture.imageUrl} alt="" />
          <div
            className="btn bg-red-700"
            onClick={() => handleDelete(picture._id)}
          >
            Delete
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryAdmin;

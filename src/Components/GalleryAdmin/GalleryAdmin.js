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
  const handleDelete = async (id) => {
    await axios.delete(`https://digilabs.herokuapp.com/picture/${id}`);
    await dispatch(galleryFetch());
  };
  return (
    <div className="grid grid-cols-5 gap-2 my-5">
      {pictures.map((picture) => (
        <div>
          <img src={picture.imageUrl} alt="" />
          <div
            className="inline-block my-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer"
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

import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { galleryFetch } from "../../App/Features/GalleryFetch/galleryFetchSlice";

const Admin = () => {
  const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  const imageInput = useRef("");
  const handleChange = () => {
    // console.log(imageInput.current.files[0]);
    const image = imageInput.current.files[0];
    setImage(image);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    await axios
      .post(
        "https://api.imgbb.com/1/upload?key=e8b0dad22118468cdad63c218aef6c48",
        formData
      )
      .then(async (res) => {
        const displayUrl = res.data.data.display_url;

        await axios.post("https://digilabs.herokuapp.com/picture", {
          displayUrl,
        });
        await dispatch(galleryFetch());
      });
  };
  return (
    <div className="my-5">
      <h1 className="text-3xl">Add Picture</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inline-block px-6 py-2 mr-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type="file"
          accept=".pnj, .jpeg, .jpg"
          onChange={handleChange}
          name="image"
          id=""
          ref={imageInput}
        />
        <input
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover: cursor-pointer"
          type="submit"
          value="Upload Picture"
        />
      </form>
    </div>
  );
};

export default Admin;

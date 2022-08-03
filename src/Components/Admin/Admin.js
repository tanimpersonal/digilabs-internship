import axios from "axios";
import React, { useRef, useState } from "react";

const Admin = () => {
  const [image, setImage] = useState([]);

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
      .then((res) => {
        const displayUrl = res.data.data.display_url;
        console.log(displayUrl);
        axios.post("http://localhost:5000/picture", { displayUrl });
      });
  };
  return (
    <div>
      <h1>Add Picture</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pnj, .jpeg, .jpg"
          onChange={handleChange}
          name="image"
          id=""
          ref={imageInput}
        />
        <input type="submit" value="Upload Picture" />
      </form>
    </div>
  );
};

export default Admin;

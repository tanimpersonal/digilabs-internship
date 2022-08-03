import React, { useState } from "react";

const Admin = () => {
  const [image, setImage] = useState([]);
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <h1>Add Picture</h1>
      <form>
        <input
          type="file"
          accept=".pnj, .jpeg, .jpg"
          onChange={handleChange}
          name="image"
          id=""
        />
        <input type="submit" onSubmit={handleSubmit} value="Upload Picture" />
      </form>
    </div>
  );
};

export default Admin;

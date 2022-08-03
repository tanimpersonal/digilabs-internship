import React from "react";

const SingleGallery = ({ image }) => {
  return (
    <div>
      <img src={image.imageUrl} alt="" />
    </div>
  );
};

export default SingleGallery;

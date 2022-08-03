import React from "react";
import Admin from "../Admin/Admin";
import Gallery from "../Gallery/Gallery";
import Notices from "../Notices/Notices";

const Homepage = () => {
  return (
    <>
      <Notices></Notices>
      <Admin></Admin>
      <Gallery></Gallery>
    </>
  );
};

export default Homepage;

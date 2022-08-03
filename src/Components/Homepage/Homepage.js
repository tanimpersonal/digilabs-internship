import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Gallery from "../Gallery/Gallery";
import Notices from "../Notices/Notices";

const Homepage = () => {
  return (
    <>
      <Notices></Notices>
      <Gallery></Gallery>
      <ContactForm></ContactForm>
    </>
  );
};

export default Homepage;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, number } = data;
    axios.post("http://localhost:5000/contactData", {
      name,
      email,
      number,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        required
        placeholder="Your Name"
        {...register("name", {})}
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        {...register("email", {})}
      />
      <input
        type="number"
        placeholder="Your Number"
        {...register("number", {})}
      />

      <input type="submit" />
    </form>
  );
};

export default ContactForm;

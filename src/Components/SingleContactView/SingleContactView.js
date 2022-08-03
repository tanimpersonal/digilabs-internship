import React from "react";

const SingleContactView = ({ contact }) => {
  const { name, email, number } = contact.contactData;

  return (
    <div className="my-5">
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Number: {number}</h1>
    </div>
  );
};

export default SingleContactView;

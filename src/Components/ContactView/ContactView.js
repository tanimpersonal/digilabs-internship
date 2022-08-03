import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactFetch } from "../../App/Features/ContactDataFetch/contactDataSlice";
import SingleContactView from "../SingleContactView/SingleContactView";

const ContactView = () => {
  const dispatch = useDispatch();
  const { isLoading, contacts, error } = useSelector((state) => state.contact);
  useEffect(() => {
    dispatch(contactFetch());
  }, []);
  console.log(contacts);
  return (
    <div className="my-5">
      <h1 className="text-3xl">Contacted Data</h1>
      {isLoading && <h1>Loading</h1>}
      {contacts &&
        contacts.map((contact) => (
          <SingleContactView
            key={contact._id}
            contact={contact}
          ></SingleContactView>
        ))}
    </div>
  );
};

export default ContactView;

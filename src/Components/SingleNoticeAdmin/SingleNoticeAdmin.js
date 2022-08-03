import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchNotices } from "../../App/Features/DataFetch/dataFetchSlice";
import CustomModal from "../CustomModal/CustomModal";

const SingleNoticeAdmin = ({ notice }) => {
  const { title, body, time, _id } = notice;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/notices/${id}`)
      .then(dispatch(fetchNotices()));
  };
  return (
    <div className="my-5">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="body">
        <p>{body}</p>
      </div>
      <div className="time">{time}</div>
      <div className="btn flex gap-5">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLong"
        >
          Edit
        </button>
        <CustomModal id={_id}></CustomModal>
        <div className="btn p-2 bg-blue-700" onClick={() => handleDelete(_id)}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default SingleNoticeAdmin;

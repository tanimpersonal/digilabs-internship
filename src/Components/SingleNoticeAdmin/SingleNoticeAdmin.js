import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchNotices } from "../../App/Features/DataFetch/dataFetchSlice";

const SingleNoticeAdmin = ({ notice }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { title, body, time, _id } = notice;
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const updateTitle = useRef();
  const updateBody = useRef();
  const updateTime = useRef();

  const handleEdit = (id) => {
    id.preventDefault();
    console.log(id);
    const title = axios.put("");
  };
  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`https://digilabs.herokuapp.com/notices/${id}`);
    await dispatch(fetchNotices());
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
          onClick={() => setEdit(true)}
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Edit
        </button>
        {edit && (
          <div>
            <form onSubmit={() => handleEdit(_id)}>
              <input type="text" placeholder="title" ref={updateTitle} />
              <input type="text" placeholder="body" ref={updateBody} />
              <input type="time" placeholder="time" ref={updateTime} />

              <input type="submit" />
            </form>
          </div>
        )}
        <div
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:cursor-pointer"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default SingleNoticeAdmin;

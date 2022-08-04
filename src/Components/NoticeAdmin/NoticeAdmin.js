import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../App/Features/DataFetch/dataFetchSlice";
import SingleNoticeAdmin from "../SingleNoticeAdmin/SingleNoticeAdmin";

const NoticeAdmin = () => {
  const dispatch = useDispatch();
  const { isLoading, notices, error } = useSelector((state) => state.notices);
  useEffect(() => {
    dispatch(fetchNotices());
  }, []);
  const [notice, setNotice] = useState(false);
  const title = useRef("");
  const body = useRef("");
  const time = useRef("");
  const handleNewNotice = async (event) => {
    event.preventDefault();
    setNotice(true);
    await axios.post("http://localhost:5000/notices", {
      title: title.current.value,
      body: body.current.value,
      time: time.current.value,
    });
    dispatch(fetchNotices());
  };

  return (
    <div className="my-5">
      <h1 className="text-3xl">All Notices</h1>
      <div className="add">
        <button
          type="button"
          onClick={() => setNotice(true)}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add New Notice
        </button>
        {notice && (
          <div>
            <form onSubmit={handleNewNotice}>
              <input
                className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                name=""
                id=""
                ref={title}
              />
              <input
                className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                name=""
                id=""
                ref={body}
              />
              <input
                className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="time"
                name=""
                id=""
                ref={time}
              />

              <button
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      {notices.map((notice) => (
        <SingleNoticeAdmin key={notice._id} notice={notice}></SingleNoticeAdmin>
      ))}
    </div>
  );
};

export default NoticeAdmin;

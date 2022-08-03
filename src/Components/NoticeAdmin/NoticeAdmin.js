import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../App/Features/DataFetch/dataFetchSlice";
import SingleNoticeAdmin from "../SingleNoticeAdmin/SingleNoticeAdmin";

const NoticeAdmin = () => {
  const dispatch = useDispatch();
  const { isLoading, notices, error } = useSelector((state) => state.notices);
  useEffect(() => {
    dispatch(fetchNotices());
  }, []);
  return (
    <div>
      <h1 className="text-3xl">All Notices</h1>
      {notices.map((notice) => (
        <SingleNoticeAdmin key={notice._id} notice={notice}></SingleNoticeAdmin>
      ))}
    </div>
  );
};

export default NoticeAdmin;

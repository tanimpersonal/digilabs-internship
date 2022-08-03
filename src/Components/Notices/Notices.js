import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../App/Features/DataFetch/dataFetchSlice";
import SingleNotice from "../SingleNotice/SingleNotice";

const Notices = () => {
  const dispatch = useDispatch();
  const { isLoading, notices, error } = useSelector((state) => state.notices);
  useEffect(() => {
    dispatch(fetchNotices());
  }, []);

  return (
    <>
      <div className="board">
        <h1 className="text-3xl">Notice Board</h1>
      </div>
      {isLoading && (
        <div>
          <h1 className="text-5xl">Loading</h1>
        </div>
      )}
      {notices &&
        notices.map((notice) => (
          <SingleNotice key={notice._id} notice={notice}></SingleNotice>
        ))}
    </>
  );
};

export default Notices;

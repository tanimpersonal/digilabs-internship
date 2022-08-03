import React from "react";

const SingleNotice = ({ notice }) => {
  const { title, body, time } = notice;
  return (
    <div className="w-[90%] my-0 mx-auto py-5">
      <div className="notices">
        <h1>Title: {title}</h1>
        <p> Body: {body}</p>
        <p>Published Time: {time}</p>
      </div>
    </div>
  );
};

export default SingleNotice;

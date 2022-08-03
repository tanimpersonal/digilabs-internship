import React from "react";

const SingleNotice = ({ notice }) => {
  const { title, body, time } = notice;
  return (
    <div className="py-5 text-center">
      <div className="notices">
        <h1>Title: {title}</h1>
        <p> Body: {body}</p>
        <p>Published Time: {time}</p>
      </div>
    </div>
  );
};

export default SingleNotice;

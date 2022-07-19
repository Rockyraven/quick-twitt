import React from "react";

export const Comment = ({
  userphoto,
  firstName,
  lastName,
  text,
  _id,
  username,
}) => {
  return (
    <div className=" mt-3 gap-2 align-center p-4">
      <div className=" gap-3 flex pl-3">
        <div>
          <img src={userphoto} alt="userphoto" />
        </div>
        <div>
          <p className="text-lg font-semibold">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-gray-500 mt-1">{username}</p>
        <div className="post-content">{text}</div>
        </div>
      </div>
    </div>
  );
};

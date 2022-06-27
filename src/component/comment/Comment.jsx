import React from 'react'

export const Comment = ({userphoto, firstname, lastname, text, _id, username  }) => {
  return (
    <div className="fetch-post ml-20  mt-3 gap-2 align-center p-4">
    <div className=" post flex pl-3">
      <img src={userphoto} alt="userphoto" />
      <p className="text-lg font-semibold">
        {firstname} {lastname}
      </p>
      <p className="text-sm text-gray-500 mt-1">{username}</p>
      <div className="post-content">{text}</div>
      </div>
      </div>
  )
}

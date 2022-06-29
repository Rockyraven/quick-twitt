import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Posts, Sidebaar } from '../../component';

export const Bookmark = () => {
    const {bookmarks} = useSelector((state) => state.bookmark);

  return (
    <div className="homepage-container">
    <Sidebaar />
    <div>
      <h1 className="ml-20 flex mt-3">Your Bookmark Posts</h1>
      
      {bookmarks?.map((item) => (
        <Posts
          key={item._id}
          firstName={item.firstName}
          lastName={item.lastName}
          username={item.username}
          userphoto={item.userphoto}
          content={item.content}
          _id={item._id}
        />
      ))}
    </div>
  </div>
  )
}

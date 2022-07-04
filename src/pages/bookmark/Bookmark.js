import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, Posts, Sidebaar } from '../../component';

export const Bookmark = () => {
  // const { loading } = useSelector((state) => state.post);
    const {bookmarks, loading} = useSelector((state) => state.bookmark);

  return (
    <>
    <div className="homepage-container">
    <Sidebaar />
     {loading ? <Loader/> : 
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
}
  </div>
  </>
  )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Loader, Posts, Sidebaar } from '../../component';
import { fetchPost } from '../../redux/slices/postSlice';

export const Explore = () => {
    const { posts, loading } = useSelector((state) => state.post);
    const [updatePost, setUpdatedPost] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost());
      }, []);
      
      useEffect(() => {
        if (posts) {
          setUpdatedPost(posts);
        }
      }, [posts]);
  return (
    <div className="homepage-container">
    <Sidebaar />
    {loading ? (
      <Loader />
    ) : (
      <div>
        <h1 className="ml-20  mt-3 text-lg font-medium">Your Posts</h1>
        {updatePost?.map((item) => (
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
    )}
 </div>
  )
}

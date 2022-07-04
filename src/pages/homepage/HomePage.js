import React, { useEffect, useState } from "react";
import { CreatePost, EditModal, Loader, Posts, Sidebaar } from "../../component";
import "./homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPost } from "../../redux/slices/postSlice";

export const HomePage = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const [ updatePost, setUpdatedPost ] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
    dispatch(createPost());
  }, []);

  useEffect(() => {
    if(posts) {
      setUpdatedPost(posts)
    }

  },[posts])

  return (
    <>
      <div className="homepage-container">
        <Sidebaar />
    {loading ? <Loader/> : 
        <div>
        <CreatePost/>
          <h1 className="ml-20  mt-3">Your Posts</h1>
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
}
      </div>
    </>
  );
};



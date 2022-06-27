import React, { useEffect, useState } from "react";
import { CreatePost, Posts, Sidebaar } from "../../component";
import "./homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPost } from "../../redux/slices/postSlice";

export const HomePage = () => {
  const { posts, loading, error } = useSelector((state) => state.post);
  const [ updatePost, setUpdatedPost ] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
    dispatch(createPost())
  }, []);

  useEffect(() => {
    if(posts) {
      setUpdatedPost(posts)
    }

  },[posts])

  console.log(posts)
  // var comments = posts?.map(item=>item.comments)
  // for( let i=0; i<3; i++) {
  //   console.log(comments[i])
  // }
  return (
    <>
      <div className="homepage-container">
        <Sidebaar />
        <div>
        <CreatePost/>
          <h1 className="ml-20 flex mt-3">Your Posts</h1>
          {updatePost?.map((item) => (
            <Posts
              key={item._id}
              firstname={item.firstname}
              lastname={item.lastname}
              username={item.username}
              userphoto={item.userphoto}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

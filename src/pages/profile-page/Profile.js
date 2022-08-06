import React, { useEffect, useState } from "react";
// import styles from "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { Loader, Posts, Sidebaar } from "../../component";
import { banner, profile, userProfile } from "../../assets";
import { fetchPost } from "../../redux/slices/postSlice";
import styles from './profile.css'

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, loading, error, likePosts } = useSelector(
    (state) => state.post
  );
  const [updatePost, setUpdatedPost] = useState(null);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  useEffect(() => {
    postHandler();
  }, []);

  const postHandler = () => {
    setUpdatedPost(posts.filter((item) => item.username === user.username));
  };

  const postLikeHandler = () => {
    setUpdatedPost(
      posts.filter((item) =>
        item.likes.likedBy.some((user) => user._id === user._id)
      )
    );
  };

  var userPost = posts?.filter((item) => item.username === user.username);

  let enableStyle = {
    color: "var(--primary-color)",
    textDecoration: "none",
    backgroundColor: "#3790e93e",
    fontSize: "24px",
  };
  const disabledStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "24px",
  };

  return (
    <>
      <div className="flex ">
        <Sidebaar />

        <div>
          {loading ? (
            <Loader />
          ) : (
            <div className="post-conatiner h-auto ml-20 mt-3 mb-10 ">
              <img src={banner} alt="banner" className="img p-3 w-full h-70" />
              <div className=" profile-img justify-center">
                <img
                  src={user.userphoto ? user.userphoto : userProfile}
                  alt="ProfileImage"
                />
              </div>
              <div className="profile-detail  p-3 leading-10">
                <div>
                  <p className="text-xl font-bold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-gray-600">{user.username}</p>
                  <p className="text-lg">{user.bio}</p>
                </div>
                <div className="ml-auto ">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                    Edit profile
                  </button>
                </div>
              </div>
              <div className="w-[90%] ml-9 rounded h-20 mt-4 flex justify-around bg-slate-100 items-center">
                <div className="flex flex-col items-center">
                  <p className="font-bold">0</p>
                  <p>Following</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">{userPost?.length}</p>
                  <p>Posts</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-bold">0</p>
                  <p>Followers</p>
                </div>
              </div>
              <div>
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-1 px-20  focus:outline-none hover:bg-indigo-600 rounded flex m-auto ml-60 flex flex-col items-center mt-2 mb-2"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
       
        <hr />
        <button
        style={{isActive: "blue", color: "red"}}
          className="inline-flex text-lg font-semibold text-black  border-0 py-1 px-20  focus:outline-none hover:border-b-4  flex m-auto ml-20 flex flex-col items-center mt-4" 
          onClick={postHandler}>Posts</button>
        <button  className="inline-flex text-lg font-semibold text-black  border-0 py-1 px-20  focus:outline-none hover:border-b-4  flex m-auto ml-20 flex flex-col items-center mt-4" onClick={postLikeHandler}>Likes</button>

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
      </div>
    </>
  );
};

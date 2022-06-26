import React, { useEffect } from "react";
import { Posts, Sidebaar } from "../../component";
import "./homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPost } from "../../redux/slices/postSlice";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { profile } from "../../assets";

export const HomePage = () => {
  const { posts, loading, error } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  // console.log(posts.map(item=> item.firstname));
  return (
    <>
      <div className="homepage-container">
        <Sidebaar />
        <div>
        <div className="create-post ml-20 flex mt-3 relative">
          <img src={profile} alt="" className="h-20 w-20" />
          <div className="input-box">
            <input type="text w-full" />
            <div className="flex mt-3">
            <div className="gap-5">
              <GifBoxOutlinedIcon sx={{fontSize: 35}} />
              <InsertEmoticonIcon sx={{fontSize: 35}}/>
              <InsertPhotoOutlinedIcon sx={{fontSize: 35}}/>
            </div>
            <div className="ml-auto">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                Post
              </button>
            </div>
            </div>
          </div>
        </div>
          <h1 className="ml-20 flex mt-3">Your Posts</h1>
          {/* {posts.map(firstname => 
            
          <Posts 
          firstname={firstname}
          
          />
            )} */}
          </div>
      </div>
    </>
  );
};

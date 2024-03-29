import React, { useState } from 'react'
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { profile, userProfile } from "../../assets";
import { createPost } from '../../redux/slices/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

export const CreatePost = ({}) => {

    const [ text, setText ] = useState("")
    const { encodedToken, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const postHandler = () => {
        if (encodedToken) {
            dispatch(createPost({ encodedToken, text }));
          setText("");
            toast.success("Post created successfully");
        } else {
        console.log("not happend")
        }
      };


  return (
    <div className="create-post ml-20 flex mt-3 bg-white relative">
    <img src={user.userphoto ? user.userphoto : userProfile} alt="" className="h-20 w-20" />
    <div className="input-box">
      <input type="text w-full" value={text} onInput={e => setText(e.target.value)} />
      <div className="flex mt-3">
        <div className="gap-5">
          <GifBoxOutlinedIcon sx={{ fontSize: 35 }} />
          <InsertEmoticonIcon sx={{ fontSize: 35 }} />
          <InsertPhotoOutlinedIcon sx={{ fontSize: 35 }} />
        </div>
        <div className="ml-auto">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" onClick={postHandler}>
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

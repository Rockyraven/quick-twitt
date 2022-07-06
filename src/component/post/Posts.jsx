import React, { useEffect } from "react";
import { profile } from "../../assets";
import "./posts.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmark,
  deleteBookmarkPost,
} from "../../redux/slices/bookmarkSlice";
import { deletePost, editPost, likePost } from "../../redux/slices/postSlice";
import { EditModal } from "../modal/EditModal";

export const Posts = ({
  content = "",
  comments = [],
  username = "",
  firstName = "",
  lastName = "",
  userphoto = "",
  _id,
}) => {
  const { encodedToken, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmark);

  const addToBookmarkHandler = () => {
    dispatch(addToBookmark({ token: encodedToken, postId: _id }));
  };
  const likeHandler = () => {
    dispatch(likePost({ token: encodedToken, postId: _id }));
  };
  const deleteBookmarkHandler = () => {
    dispatch(deleteBookmarkPost({ token: encodedToken, postId: _id }));
  };
  const editHandler = () => {
    dispatch(editPost({ token: encodedToken, postId: _id }));
  };
  
  const deletePostHandler = () => {
    dispatch(deletePost({ token: encodedToken, postId: _id }));
    console.log("clicked..")
  };

  const [isTooltipVisible, setIsTooltipVisible] = useState("hidden");
  const tooltipHandler = (_id) => {
    isTooltipVisible === "hidden"
      ? setIsTooltipVisible((prev) => "visible")
      : setIsTooltipVisible((prev) => "hidden");
  };
  return (
    <div className="relative fetch-post ml-20 border-gray-500 mt-3 gap-2 align-center p-4">
      <div className=" post flex pl-3">
        <img src={userphoto} alt="userphoto" />
        <p className="text-lg font-semibold">
          {firstName} {lastName}
        </p>
        <p className="text-sm text-gray-500 mt-1">{username}</p>
        <button className="ml-auto pointer-cursor">
          <MoreVertOutlinedIcon onClick={tooltipHandler} />
        </button>
        <div
          className={`border rounded-sm absolute right-2 bg-white ${isTooltipVisible}`}
        >
          <div
            className=" absolute bg-red-400 text-white flex m-1 border-b gap-2 hover:bg-slate-200 cursor-pointer rounded-sm p-1.5 top-2 right-5"
            onClick={deletePostHandler}
          >
            <h1 className="flex">
              Delete <DeleteIcon />
            </h1>
          </div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <div className="gap-2 flex ml-2 mt-3">
        <FavoriteBorderIcon  onClick={likeHandler}/>

        <BookmarkBorderOutlinedIcon onClick={addToBookmarkHandler} />
        <button
          className="hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <EditModal _id = {_id} />
        </button>
      </div>
      <div className="post flex  mt-5">
        <img src={profile} alt="userphoto" />
        <input
          placeholder="Post your reply..."
          className="rounded pr-8 pl-4 ml-4 w-full h-12  dark:border-slate-400 border border-text-slate-800 outline-none "
          type="text"
        ></input>
        <button className="dark:disabled:text-slate-400 disabled:text-slate-700 text-blue-500 -ml-10">
          <SendOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

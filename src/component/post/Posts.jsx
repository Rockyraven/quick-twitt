import React from "react";
import { profile } from "../../assets";
import "./posts.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export const Posts = ({firstname, lastname, username, content, userphoto, _id,id}) => {
  return (
    <div className="fetch-post ml-20  mt-3 gap-2 align-center p-4">
      <div className=" post flex pl-3">
        <img src={userphoto} alt="userphoto" />
        <p className="text-lg font-semibold">{firstname} {lastname}</p>
        <p className="text-sm text-gray-500 mt-1">{username}</p>
        <MoreVertOutlinedIcon className="ml-auto" />
      </div>
      <div className="post-content">
       {content}
      </div>
      <div className="gap-2 flex ml-2 mt-3">
        <FavoriteBorderIcon />
        <BookmarkBorderOutlinedIcon />
        <EditOutlinedIcon />
      </div>
      <div className="post flex  mt-5">

      <img src={profile} alt="userphoto" />
      <input
            placeholder="Post your reply..."
            className="rounded pr-8 pl-4 ml-4 w-full h-12  dark:border-slate-400 border border-text-slate-800 outline-none "
            type="text"
            // value={replyText}
            // onChange={(e) => setReplyText(e.target.value)}
          ></input>
          <button
            // disabled={replyText.length === 0}
            className="dark:disabled:text-slate-400 disabled:text-slate-700 text-blue-500 -ml-10"
            // onClick={addCommentHandler}
          >
            <SendOutlinedIcon />
          </button>
      </div>
    </div>
  );
};

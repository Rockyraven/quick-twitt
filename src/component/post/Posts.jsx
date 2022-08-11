import React, { useEffect } from "react";
import { profile } from "../../assets";
import "./posts.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmark,
  deleteBookmarkPost,
} from "../../redux/slices/bookmarkSlice";
import { deletePost, disLikePost, editPost, likePost } from "../../redux/slices/postSlice";
import { EditModal } from "../modal/EditModal";
import {
  followPost,
  getCommentOnPost,
  postComment,
} from "../../redux/slices/commentSlice";
import { Comment } from "../comment/Comment";

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
  const { commentsList } = useSelector((state) => state.comment);
  const [updateComment, setUpdateComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [ isBookmark, setisBookmarked ] = useState(false);

  const addToBookmarkHandler = () => {
    dispatch(addToBookmark({ token: encodedToken, postId: _id }));
  };

  const likeHandler = () => {
    dispatch(likePost({ token: encodedToken, postId: _id }));
    setIsLiked(!isLiked);
  };
  
  const disLikeHandler = () => {
    dispatch(disLikePost({ token: encodedToken, postId: _id }));
    setIsLiked(!isLiked);
  };

  const deleteBookmarkHandler = () => {
    dispatch(deleteBookmarkPost({ token: encodedToken, postId: _id }));
  };

  const deletePostHandler = () => {
    dispatch(deletePost({ token: encodedToken, postId: _id }));
  };

  const commentPostHandler = () => {
    dispatch(postComment({ encodedToken, postId: _id, updateComment }));
    setUpdateComment("");
  };

  useEffect(() => {
    setisBookmarked(bookmarks?.some((id) => id === _id))
  }, [bookmarks]);


  const [isTooltipVisible, setIsTooltipVisible] = useState("hidden");
  const [isCommentVisible, setIsCommentVisible] = useState("none");

  const commentHandler = () => {
    dispatch(getCommentOnPost({ token: encodedToken, postId: _id }));
    if (isCommentVisible === "none") {
      setIsCommentVisible("block");
    } else {
      setIsCommentVisible("none");
    }
  };

  const tooltipHandler = (_id) => {
    isTooltipVisible === "hidden"
      ? setIsTooltipVisible((prev) => "visible")
      : setIsTooltipVisible((prev) => "hidden");
  };
  return (
    <div className="relative fetch-post ml-20 border-gray-500 bg-white mt-3 gap-2 align-center p-4">
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
          className={` border rounded-sm absolute right-2 bg-white ${isTooltipVisible}`}
        >
          {user.username === username ? 
          <div className=" absolute bg-red-400 text-white   m-1 border-b gap-2  cursor-pointer rounded-sm p-2 top-2 right-5">
            <button
              onClick={deletePostHandler}
              className="flex hover:bg-slate-200 m-1"
            >
              Delete <DeleteIcon />
            </button>
            <div>
              <button className="hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 flex hover:bg-slate-200 m-1">
               Edit <EditModal _id={_id} />
              </button>
            </div>
          </div> :
          <div className=" absolute bg-red-400 text-white   m-1 border-b gap-2  cursor-pointer rounded-sm p-1 top-2 right-5">
            <button
              className="flex hover:bg-slate-200 m-1"
            >
              Follow
            </button>
            </div>
            }
        </div>
      </div>
      <div className="post-content">{content}</div>
      <div className="gap-2 flex ml-2 mt-3">
        {isLiked ? (
          <FavoriteOutlinedIcon 
          className="hover:opacity-75 cursor disabled:opacity-50"
          onClick={disLikeHandler} />
        ) : (
          <FavoriteBorderIcon
            className="hover:opacity-75 cursor disabled:opacity-50"
            onClick={likeHandler}
          />
        )}
        
          {!isBookmark && 
        <BookmarkBorderOutlinedIcon
          className="hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={addToBookmarkHandler}
        /> }
          {isBookmark && 
        <BookmarkOutlinedIcon
          className="hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={addToBookmarkHandler}
        /> }

        <button className="hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50">
          <ModeCommentOutlinedIcon onClick={commentHandler} _id={_id} />
        </button>
      </div>
      <div
        className="post flex  h-auto w-15   mt-5"
        style={{ display: isCommentVisible }}
      >
        <div className=" flex">
          <img src={userphoto} alt="userphoto" />
        </div>
        <div>
          <input
            onInput={(e) => setUpdateComment(e.target.value)}
            value={updateComment}
            placeholder="Post your reply..."
            className="rounded pr-8 pl-4 ml-4 w-11/12 h-12  dark:border-slate-400 border border-text-slate-800 outline-none "
            type="text"
          ></input>
          <button className="dark:disabled:text-slate-400 disabled:text-slate-700 text-blue-500 -ml-10">
            <SendOutlinedIcon onClick={commentPostHandler} />
          </button>
        </div>
        {commentsList?.map((item) => (
          <Comment
            key={item._id}
            firstName={item.firstName}
            lastName={item.lastName}
            username={item.username}
            userphoto={item.userphoto}
            text={item.text}
            _id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

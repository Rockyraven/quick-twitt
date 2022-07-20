import React, { useEffect } from "react";
import { tanay } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { followPost } from "../../redux/slices/commentSlice";
import { getAllUsers } from "../../redux/slices/authSlice";

export const FollowCard = ({
  firstName = "",
  lastName = "",
  userphoto = "",
  username = "",
}) => {
  const dispatch = useDispatch();
  const { encodedToken, user } = useSelector((state) => state.auth);
  const followPostHandler = () => {
    dispatch(followPost({ token: encodedToken, followUserId: user._id }));
  };



  const getAllUsersHandler = () => {
    dispatch(getAllUsers());
  };
  return (
    <div className=" mt-1 gap-2 align-center p-4">
      <div className=" border-2 p-2 w-80 items-center gap-3 flex pl-3">
        <div className="h-16 w-16">
          <img src={userphoto} alt="userphoto" />
        </div>
        <div>
          <p className="text-lg font-semibold">
            {firstName} {lastName}
          </p>
          <p
            className="text-sm text-gray-500 mt-1"
            onClick={getAllUsersHandler}
          >
            rocky
          </p>
        </div>
        <button
          className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded ml-auto"
          onClick={followPostHandler}
        >
          Follow
        </button>
      </div>
    </div>
  );
};

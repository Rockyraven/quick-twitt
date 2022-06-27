import React, { useEffect } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { Sidebaar } from "../../component";
import { banner, profile } from "../../assets";
import { fetchPost } from "../../redux/slices/postSlice";


export const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts,loading, error } = useSelector(state => state.post)
  useEffect(()=> {
    dispatch(fetchPost())
  },[])


  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="flex ">
        <Sidebaar />
        <div className="post-conatiner h-50 ml-10 mt-3 ">
          <img src={banner} alt="banner" className="img p-3 w-full h-70" />
          <div className=" profile-img justify-center">
            <img src={user.userphoto} alt="" />
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
              <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
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
              <p className="font-bold">0</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">0</p>
              <p>Followers</p>
            </div>
          </div>
          <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-20  focus:outline-none hover:bg-indigo-600 rounded" onClick={logoutHandler}>
                Logout
              </button>
        </div>
      </div>
      
    </>
  );
};

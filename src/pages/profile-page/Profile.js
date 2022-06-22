import React from "react";
import "./profile.css";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import {  logout } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";


export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
//   const logoutHandler = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//     toast.error("Logged Out successfully")
//   };
const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
    // toast.error("Logout Successfully")
  }

  return (
    <>
      <div className="login-page-container">
        <div className="logout-section">
          {/* <p className="login-tilte">
            Name: {user.firstName} {user.lastName}
          </p>
          <p className="login-tilte">Email: {user.email}</p> */}
          <button className="login-button"  onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

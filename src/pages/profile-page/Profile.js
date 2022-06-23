import React from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import {  logout } from "../../redux/slices/authSlice";


export const Profile = () => {
    const {  user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate()


const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <div className="login-page-container">
        <div className="logout-section">
          <p className="login-tilte">
            Name: {user.firstName} {user.lastName}
          </p>
          <p className="login-tilte">Email: {user.email}</p>
          <button className="login-button"  onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

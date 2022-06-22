import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../redux/slices/authSlice";
import './loginPage.css'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

export const LoginPage = () => {
const [ username, setUsername ] = useState("")
const [ password, setPassword ] = useState("")
const { loading, error, isAuthenticated } = useSelector(state => state.auth)
const dispatch = useDispatch();
const navigate = useNavigate()

useEffect(()=>{
  if(isAuthenticated){
    navigate('/home')
    toast.success("LoggedIn successFully")
  }
  if(error){
    toast.error(error.message)
  }
   dispatch(clearError())
},[isAuthenticated, error, dispatch])


const loginHandler = (username, password) => {
  dispatch(login({username, password}))
}

  return (
    <>
    {loading ? <h1>Loadin...</h1> :
    <>

    <div className="login-page-container">
      <div className="login-wrapper">
        <h1 className="login-tilte">Login</h1>
        <input
          type="text"
          id="outlined-password-input"
          className="input-box"
          label="user"
          value={username}
          autoComplete="current-password"
          placeholder="User Name"
          onInput={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          label="password"
          value={password}
          id="outlined-password-input"
          className="input-box"
          autoComplete="current-password"
          placeholder="Password"
          onInput={(e) => setPassword(e.target.value)}
        />
        <button
          className="demo-login-button"
          onClick={() => {
            setUsername("adarshbalika");
            setPassword("adarshBalika123")
          }}
        >
          Login with guest user
        </button>
        <button
          className="login-button"
          onClick={() => loginHandler(username, password)}
        >
          Login
        </button>
      </div>
    </div>
    </>
}
    </>
  );
};

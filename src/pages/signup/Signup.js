import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setError, signUp } from '../../redux/slices/authSlice';
import {toast} from 'react-toastify'

export const Signup = () => {
    const { loading, error, isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ dataForm, setDataForm ] = useState({
        username: "",
        firstname: "",
        lastname: "",
        password1: "",
        password2: "",
    })
    useEffect(()=>{
        if(isAuthenticated){
          navigate('/')
          toast.success("LoggedIn successFully")
        }
        console.log(error)
        if(error){
          toast.error(error.message)
        }
         dispatch(setError())
      },[isAuthenticated, error, dispatch])

    const validateData = () => {
        if(dataForm.firstname === "" || dataForm.lastname === "" || dataForm.username === "" || dataForm.password1.length < 6 ) {
            dispatch(setError( "Invalid Data "))
            return false;
        }
       
       
        return true
    }
    const signupHandler = (e) => {
        e.preventDefault();
        if (validateData()) {
            console.log("Workin..")
          dispatch(signUp(dataForm));
          navigate('/')
        }
      };
    return (
        <>
        {loading ? <h1>Loadin...</h1> :
        <>
    
        <div className="login-page-container">
          <div className="login-wrapper">
            <h1 className="login-tilte">Signup</h1>
            {error}
            <input
              type="text"
              id="outlined-password-input"
              className="input-box"
              label="user"
              value={dataForm.firstname}
              autoComplete="current-password"
              placeholder="First Name"
              onInput={(e) => setDataForm((prev) => ({...prev, firstname: e.target.value}))}
            />
            <input
              type="text"
              id="outlined-password-input"
              className="input-box"
              label="user"
             value={dataForm.lastname}
              autoComplete="current-password"
              placeholder="LastName"
              onInput={(e) => setDataForm((prev) => ({...prev, lastname: e.target.value}))}
            />
            <input
              type="text"
              id="outlined-password-input"
              className="input-box"
              label="user"
              value={dataForm.username}
              autoComplete="current-password"
              placeholder="User Name"
              onInput={(e) => setDataForm((prev) => ({...prev, username: e.target.value}))}
            />
            <input
              type="password"
              label="password"
              value={dataForm.password1}
              id="outlined-password-input"
              className="input-box"
              autoComplete="current-password"
              placeholder="Password"
              onInput={(e) => setDataForm((prev) => ({...prev, password1: e.target.value}))}
            />
            <input
              type="password"
              label="password"
              value={dataForm.password2}
              id="outlined-password-input"
              className="input-box"
              autoComplete="current-password"
              placeholder="Confirm Password"
              onInput={(e) => setDataForm((prev) => ({...prev, password2: e.target.value}))}
            />
            
            <button
              className="login-button"
              onClick={signupHandler}
            >
              Login
            </button>
            <p>Already have an account? <Link to='/login' >Login</Link></p> 
          </div>
        </div>
        </>
    }
        </>
      );
    };
    
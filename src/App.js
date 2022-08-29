import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component";
import { Bookmark, Explore, HomePage, LoginPage, Profile, Signup } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ProtectedRoute } from "./component/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/slices/userSlice";

export const App = () => {
  const {  user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getAllUsersHandler = () => {
    dispatch(getAllUsers());
  };
  useEffect(()=>{
    getAllUsersHandler()
  },[user])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Navbar />
      <div className="bg-indigo-50">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/bookmark" element={<Bookmark/>} />
          <Route path='/explore' element={<Explore/>} />
        </Route>
      </Routes>
      </div>
    </>
  );
};

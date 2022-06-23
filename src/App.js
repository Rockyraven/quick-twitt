import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './component'
import { HomePage, LoginPage, Profile, Signup } from './pages'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './component/ProtectedRoute';
  
export const App = () => {
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
   <Navbar/>
   <Routes>
    {/* <Route element={<ProtectedRoute/>}> */}
     <Route path='/' element={<HomePage/>} />
     <Route path='/login' element={<LoginPage/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/signup' element={<Signup/>} />
     {/* </Route> */}
   </Routes>
    </>
  )
}

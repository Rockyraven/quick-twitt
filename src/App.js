import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './component'
import { HomePage } from './pages/homepage/HomePage'

export const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
     <Route path='/home' element={<HomePage/>} />
   </Routes>
    </>
  )
}

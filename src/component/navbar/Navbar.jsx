import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
        <p className='navbar-title'>QuickTwitt</p>
        <div className='login-link'>
            <a href="/"> Explore More</a>
        </div>
        </div>
  )
}

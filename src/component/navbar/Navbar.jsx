import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to='/'>
        <p className='navbar-title'>QuickTwitt</p>
        </Link>
        <div className='login-link'>
          <Link to='/login'>Login
          </Link>
        </div>
        </div>
  )
}

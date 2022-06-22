import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {useSelector} from 'react-redux'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return (
    <div className='navbar-container'>
        <Link to='/' className='navbar-title'>QuickTwitt
        </Link>
        <div className='login-link'>
        {isAuthenticated? <Link to="/profile" className="login">
          <PersonIcon className='symbol'/>
          </Link> : <Link to="/login" className="login">
            <LoginIcon className='symbol'/>
          </Link>}
        </div>
        </div>
  )
}

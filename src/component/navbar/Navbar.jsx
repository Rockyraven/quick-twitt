import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {useSelector} from 'react-redux'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  const { user } = useSelector(state => state.auth)
  return (
    <div className='navbar-container'>
        <Link to='/' className='navbar-title'>
        <img
            className="title h-6 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> <p>QuickTwitt</p>
          
        </Link>
        <div className='login-link'>
        {user? <Link to="/profile" className="login">
          <PersonIcon className='symbol' sx={{fontSize: 30}}/>
          </Link> : <Link to="/login" className="login">
            <LoginIcon className='symbol' sx={{fontSize: 30}}/>
          </Link>
          }
        </div>
        </div>
  )
}

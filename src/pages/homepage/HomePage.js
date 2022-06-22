import React from 'react'
import { Sidebaar } from '../../component'
import './homepage.css'

export const HomePage = () => {
  return (
    <>
    <div className="homepage-container">
    <Sidebaar/>
    <div className="post-conatiner">
    
    </div>
    <div className='search-bar'>
        <input type="text" className='search-input'/>
        <button className='search-button'>Search</button>
    </div>
    </div>
    </>
  )
}

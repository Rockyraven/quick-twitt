import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonIcon from '@mui/icons-material/Person';
import "./sidebaar.css";

export const Sidebaar = () => {
  return (
    <div className="sidebaar-wrapper">
    <div className="sidebar-container wrapper">
      <Link to="/home">
        <div className="sidebaar-icon">
          <HomeIcon sx={{fontSize: 30}} className='icon' />
          <p className="sidebar-symbol">Home</p>
        </div>
      </Link>
      <Link to="/explore">
        <div className="sidebaar-icon">
          <ExploreIcon sx={{fontSize: 30}} className='icon'/>
          <p className="sidebar-symbol">Explore</p>
        </div>
      </Link>
      <Link to="/bookmark">
        <div className="sidebaar-icon">
          <BookmarkBorderIcon sx={{fontSize: 30}} className='icon'/>
          <p className="sidebar-symbol">BookMark</p>
        </div>
      </Link>
      <Link to="/profile">
        <div className="sidebaar-icon">
          <PersonIcon sx={{fontSize: 30}} className='icon'/>
          <p className="sidebar-symbol">Profile</p>
        </div>
      </Link>
    </div>
    </div>
  );
};

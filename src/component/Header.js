import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/youtube/youtube_PNG6.png"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className='header__searchButton'/>
      </div>
      <div className="header__right">
        <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon'/>
        <Avatar  src='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ' className='header__icon'/>
      </div>
    </div>
  );
}

export default Header;

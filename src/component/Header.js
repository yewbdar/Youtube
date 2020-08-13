import React ,{useState}from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'

function Header() {
  const [search , setSearch] = useState('')
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to='/'>
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/youtube/youtube_PNG6.png"
          alt=""
        />
        </Link>
        
      </div>

      <div className="header__input">
        <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search" type="text" />
        <Link to={`/search/${search}`}>
        <SearchIcon  className='header__searchButton'/>
        </Link>
        
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

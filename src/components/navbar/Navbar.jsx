import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { AuthContext } from "../.././context/authContext";
import { useContext } from "react";

function Navbar() {

  const {currentUser} = useContext(AuthContext)


  return (
    <div className='navbar'>

    <div className="left">
    <Link style={{textDecoration:"none"}} to="/">
    <span>  LAMO</span>
    </Link> 

    <div className="search">
      <SearchOutlinedIcon/>
      <input type="text" placeholder='search...'/>
    </div>
    </div>

    <div className="right">
      <ChatBubbleOutlineOutlinedIcon/>
      <NotificationsActiveOutlinedIcon/>

      <div className="user">
        <span>{currentUser?.name}</span>
        <img src={currentUser?.profilePic} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./profile.scss";
import Posts  from "../../components/posts/Posts";
function Profile() {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://i.pinimg.com/originals/4a/82/29/4a8229489b3dd2c3faba443e1b765ed0.jpg" alt="" className="cover" />
        <img src="https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg" alt="" className="profilePic" />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='https://www.facebook.com/'>
              <FacebookTwoToneIcon fontSize='large'/>
              </a>
            <a href='https://www.instagram.com/'>
              <InstagramIcon fontSize='large'/>
              </a>
            <a href='https://www.twitter.com/'>
              <TwitterIcon fontSize='large'/>
              </a>
            <a href='https://www.youtube.com/'>
              <YouTubeIcon fontSize='large'/>
              </a>
            <a href='https://www.linkedin.com/'>
              <LinkedInIcon fontSize='large'/>
              </a>
            {/* <a href='https://www.pinterest.com/'>
              <PinterestIcon fontSize='large'/>
              </a> */}
          </div>
          <div className="center">
            <span> Mohamed Ishaque S </span>
            <div className="info">
              <div className="item">
              <LocationOnIcon/>
              <span> USA </span>  
              </div>
              <div className="item">
              <LanguageIcon/>
              <span> ishaque.io </span>  
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <MessageIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile
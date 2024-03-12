import React, { useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { Link } from 'react-router-dom'
import "./post.scss"
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import Comment from '../comment/Comment';
function Post({post,key}) {

    const like = false;
    const [isOpen,setIsOpen] = useState(false)

    const handleComment = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='post'>
     <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`profile/${post.id}`} style={{textDecoration:'none',color:'inherit'}}> <span className='name'> {post.name} </span> </Link>
                    <span className='date'>1 min ago.</span>
                </div>
            </div>
            <div className="moreinfo">
                <MoreHorizOutlinedIcon/>
            </div>
        </div>

        <div className="content">
            <p> {post.Description} </p>
            <img src={post.Image} alt="" />
        </div>
        <div className="postoption">
            <div className="item">
                { like ?  <FavoriteOutlined/> : <FavoriteBorderOutlinedIcon/> }
                12 Likes
            </div>
            <div className="item" onClick={()=> handleComment()}>
            <CommentOutlinedIcon />
            12 Comments
            </div>
            <div className="item">
            <ShareOutlinedIcon/>
            Share
            </div>
        </div>
       { isOpen &&  <Comment/> }
    </div>
    </div>
  )
}

export default Post
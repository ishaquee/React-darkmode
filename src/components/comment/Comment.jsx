import React from 'react'
import "./comment.scss"
import { AuthContext } from "../.././context/authContext";
import { useContext } from "react";

function Comment() {

    const {currentUser} = useContext(AuthContext)

    //Temporary 
    const comments = [
        {
            id:1,
            desc: 'lorem ipsum dolor sit amet lore min elit rut, sed diam nonumy lorem ipsum dolor sit amet lore min elit rut, sed diam nonumy lorem ipsum d',
            name:'mohamed',
            userId:2,
            profilePic:'https://images.unsplash.com/photo-1628029799784-50d803e64ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlciUyMGZvciUyMG1vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id:2,
            desc: 'lorem ipsum dolor sit amet lore min elit rut, sed diam nonumy',
            name:'Ishaque',
            userId:2,
            profilePic:'https://c4.wallpaperflare.com/wallpaper/366/967/641/planet-clouds-backgrounds-light-star-wallpaper-preview.jpg'
        }
    ]

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='write your thoughts about this post ....'/>
            <button>send</button>
        </div>
        { comments.map((comment) => (
            <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
                <span> {comment.name} </span>
                <p> {comment.desc} </p>
            </div>
            <span className='date'> 1 hour ago </span>
            </div>

        )
        ) }
    </div>
  )
}

export default Comment
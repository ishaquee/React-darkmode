import React from 'react'
import "./leftbar.scss";
import { AuthContext } from "../.././context/authContext";
import { useContext } from "react";

function Leftbar() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='leftbar'>
      <div className="container">

        <div className="menu">
        <div className="user">
         <img src={currentUser.profilePic} alt="" />
         <span>{currentUser.name} (you) </span> 
        </div>

        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/1089/1089093.png" alt="" />
         <span> Friends </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/599/599928.png" alt="" />
         <span> Groups </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/4003/4003655.png" alt="" />
         <span> Market place </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/1571/1571816.png" alt="" />
         <span> Memories </span>
        </div>
        </div>
        <hr/>
        <div className="menu">
      
        <span>Your shortcuts</span>

        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/1089/1089093.png" alt="" />
         <span> Friends </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/599/599928.png" alt="" />
         <span> Groups </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/4003/4003655.png" alt="" />
         <span> Market place </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/1571/1571816.png" alt="" />
         <span> Memories </span>
        </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>

        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/1089/1089093.png" alt="" />
         <span> Friends </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/599/599928.png" alt="" />
         <span> Groups </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/4003/4003655.png" alt="" />
         <span> Market place </span>
        </div>
        <div className="item">
         <img src="https://cdn-icons-png.flaticon.com/512/1571/1571816.png" alt="" />
         <span> Memories </span>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Leftbar
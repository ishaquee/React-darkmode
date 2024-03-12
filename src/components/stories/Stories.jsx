import React from 'react'
import "./stories.scss";
import { AuthContext } from "../.././context/authContext";
import { useContext } from "react";

function Stories() {
    const {currentUser} = useContext(AuthContext)

    //Temporary data for stories
    const stories = [
        {
            id:1,
            name:'Mohan',
            image:'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
            id:2,
            name:'Ishaque',
            image:'https://www.hdwallpapers.in/download/goku_2020_4k_hd-3840x2160.jpg',
        },
        {
            id:4,
            name:'Kavin',
            image:'https://c4.wallpaperflare.com/wallpaper/215/1010/441/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg',
        },
        {
            id:1,
            name:'Mohan',
            image:'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
            id:4,
            name:'Kavin',
            image:'https://c4.wallpaperflare.com/wallpaper/215/1010/441/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg',
        },
        {
            id:1,
            name:'Mohan',
            image:'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
            id:4,
            name:'Kavin',
            image:'https://c4.wallpaperflare.com/wallpaper/215/1010/441/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg',
        },
        {
            id:1,
            name:'Mohan',
            image:'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
            id:4,
            name:'Kavin',
            image:'https://c4.wallpaperflare.com/wallpaper/215/1010/441/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg',
        },
        {
            id:1,
            name:'Mohan',
            image:'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
            id:4,
            name:'Kavin',
            image:'https://c4.wallpaperflare.com/wallpaper/215/1010/441/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg',
        },
        {
            id:1,
            name:'Mohan',
            image:'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
       
        
    ];

  return (
    <div className='stories'>
        <div className="story">
                    <img src={currentUser.profilePic} alt="" />
                    <span> {currentUser.name} </span>
                    <button>+</button>
                </div>
        {
            stories.map(story => (
                <div className="story">
                    <img src={story.image} alt="" />
                    <span> {story.name} </span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories
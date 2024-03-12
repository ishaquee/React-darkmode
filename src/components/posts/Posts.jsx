import React from 'react'
import Post from '../post/Post'

function Posts() {

    //temporary data for posts

    const posts = [
        {
            id: 1,
            name:'Mohamed',
            profilePic:'https://c4.wallpaperflare.com/wallpaper/881/28/979/mac-os-x-os-x-big-sur-hd-wallpaper-preview.jpg',
            Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel deserunt, qui a eos dolorum, voluptatibus officiis quisquam recusandae commodi id facilis sit nulla voluptates quaerat fugiat quam consectetur. At.',
            Image:'https://wallpaper.dog/large/10883221.jpg'
        },
        {
            id: 2,
            name:'Ganesh',
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LXNan-fM4zhBNBHjbME6_h43Amn97t2yiQ&usqp=CAU',
            Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel deserunt, qui a eos dolorum, voluptatibus officiis quisquam recusandae commodi id facilis sit nulla voluptates quaerat fugiat quam consectetur. At.',
            Image:'https://wallpaper.dog/large/10883221.jpg'
        },
        {
            id: 2,
            name:'Ganesh',
            profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LXNan-fM4zhBNBHjbME6_h43Amn97t2yiQ&usqp=CAU',
            Description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel deserunt, qui a eos dolorum, voluptatibus officiis quisquam recusandae commodi id facilis sit nulla voluptates quaerat fugiat quam consectetur. At.',
            Image:'https://wallpaper.dog/large/10883221.jpg'
        }
    ]

  return (
    <div className='Posts'> 
    { posts.map(post => 
    <Post post={post} key={post.id}/>
        ) }
    
    </div>
  )
}

export default Posts
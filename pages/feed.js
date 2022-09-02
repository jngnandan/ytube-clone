import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { VideoContext } from '../context/VideoContext'
import { createContext, useContext } from 'react';
import Link from 'next/link'


const Feed = (props) => {
  const {posts} = useContext(VideoContext)
  const {post,key} = props
  const {name, url, user} = post.data
//   console.log(post.id)
  return (
    <div>
      <Link href={`/player/${post.id}`}>
        <a href={`/player/${post.id}`} className='flex flex-row justify-start'>
          <ReactPlayer width="30vw" height="20vh" url={url} />
        <div className='pt-4'>
          <h1 className='pl-2 text-md w-auto'>{name}</h1>
          <p className='text-sm text-gray-500 pl-4'>{user}</p>
          {/* <p className='text-sm text-gray-500 pl-4'>{post.data.user}</p> */}
        </div>
        </a>
    </Link>
    </div>
  )
}
export default Feed


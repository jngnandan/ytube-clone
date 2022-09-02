import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { VideoContext } from '../context/VideoContext'
import { createContext, useContext } from 'react';
import Link from 'next/link'


const Video = (props) => {
  const {posts} = useContext(VideoContext)
  const {post,key} = props
  const {name, url, user} = post.data
  return (
    <div>
      <Link href={`/player/${post.id}`}>
        <a>
          <ReactPlayer width="100%" height="20vh" url={url} />
        <div>
          <h1 className='pl-2'>{name}</h1>
          <p className='text-sm text-gray-500 pl-4'>{user}</p>
          {/* <p className='text-sm text-gray-500 pl-4'>{post.data.user}</p> */}
        </div>
        </a>
      
    </Link>
    </div>
  )
}
export default Video


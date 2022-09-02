import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layouts from './components/Layouts'
import ReactPlayer from 'react-player/youtube'
import { VideoContext } from '../context/VideoContext'
import { createContext, useContext } from 'react';
import Video from '../pages/video'

export default function Home() {
      const {posts} = useContext(VideoContext)
      // const {id} = posts
      // console.log(posts[0].data.name)
      // console.log(posts)
  return (
    <Layouts title="Youtube">
      <div>
        {/* Buttons */}
        <div className='flex flex-row py-4'>
          <button className='outline outline-1 bg-gray-500 rounded-full px-4 mx-2'>All</button>
          <button className='outline outline-1 rounded-full h-8 mx-2 px-4'>Music</button>
          <button className='outline outline-1 rounded-full h-8 mx-2 px-4'>Mixed</button>
          <button className='outline outline-1 rounded-full h-8 mx-2 px-4'>Live</button>
        </div>
        

        <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 justify-evenly'>     
            {posts.map((post) => (
              <Video key={post.id} post={post} />
              // console.log(post.id)
            ))}
        </div>
      </div>
    </Layouts>
  )
}

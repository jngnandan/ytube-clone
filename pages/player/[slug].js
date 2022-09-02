import Link from 'next/link'
import { VideoContext } from '../../context/VideoContext'
import { useContext, useEffect, useState } from 'react'
import Layouts from '../components/Layouts'

import {getFirestore, collection, getDoc, setDoc, doc, query, where, getDocs} from 'firebase/firestore'
import {db} from '/firebase'
import { useRouter } from 'next/router'
import firebase from '/firebase'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
import Video from '../../pages/video'
import Comment from '../../pages/comment'
import Feed from '../../pages/feed'
import {AiOutlineLike, AiOutlineShareAlt, AiOutlineDislike, AiFillDislike, AiFillLike} from 'react-icons/ai'


const Player  = ({post}) => {
    const {posts, addLike, thisPost, newPost, notLike} = useContext(VideoContext)
    const { query } = useRouter();
    
    newPost(query)

console.log(thisPost)
    

    const newLike = () => {
        addLike(query, thisPost)
    }

    const nonLike = () => {
        notLike(query, thisPost)
    }


    return(
        <Layouts>
        <div className='my-4'>

            <ReactPlayer width="80%" height="50vh" url={thisPost.data.url} />
            <h1 className='py-3 pl-3 text-xl font-medium'>{thisPost.data.name}</h1>
            <p className='text-sm text-gray-500 pl-3'>{thisPost.data.description}</p>
            
            <div className='flex flex-col justify-between mb-10'>
                    {/* Subscribee */}
                <div className='p-4 flex flex-row justify-start items-center'>
                    {/* <Image width={20} height={20} className='rounded-full' /> */}
                    <button className="w-9 h-9 bg-white rounded-full"></button>
                    <div>
                        <p className='text-sm pl-3 font-semibold'>{thisPost.data.channel}</p>
                        <p className='text-sm text-gray-500 pl-3'>1.2M subscribers</p>
                    </div>
                    
                </div>
                {/* Likes */}
                <div className='p-4 flex flex-row justify-start items-center'>
                    {/* <Image width={20} height={20} className='rounded-full' /> */}
                    <div className='flex flex-row justify-center items-end'>

                    {thisPost.data.like? <button onClick={newLike}><AiOutlineLike className='text-2xl text-white' /></button> : 
                    <button onClick={nonLike}><AiFillLike className='text-2xl text-white' /></button>}

                    
                    <p className='text-sm pl-1.5'>{thisPost.data.likes}</p>
                    </div>
                    
                    <>
                    {thisPost.data.dislike? <AiOutlineDislike onClick={() => setDislike(!dislike)} className='text-2xl text-white mx-6' /> : 
                    <AiFillDislike onClick={() => setDislike(!dislike)} className='text-2xl text-white mx-6' />}
                    </>

                    <>
                    <AiOutlineShareAlt className='text-2xl text-white' />
                    </>
                    
                </div>


                <div className='flex flex-row justify-start items-center'>
                <div className='p-3'>
                        <p className='text-sm pl-3 font-semibold'>Comments</p>
                        <p className='text-sm text-gray-500 pl-3'>12</p>
                    </div>
                <input className='rounded-sm h-9 pl-3 placeholder:text-sm' placeholder='Add a comment..'/>
                {/* Comment map */}
                <div>
                    {/* {comments.map(comment => {
                        return <li key={comment}>{comment}</li>
                    })} */}
                </div>
                <div>
                    
                </div>
                </div>
            </div>

        <div className='flex flex-row p-3'>
          <button className='outline outline-1 bg-gray-500 rounded-full px-4 mx-2'>All</button>
          <button className='outline outline-1 rounded-full h-8 mx-2 px-4'>Music</button>
          <button className='outline outline-1 rounded-full h-8 mx-2 px-4'>Mixed</button>
          <button className='outline outline-1 rounded-full h-8 mx-2 px-4'>Live</button>
        </div>
        
        <div className='grid grid-cols-1 gap-4 justify-evenly'>     
            {posts.map((post, key) => (
              <Feed key={post.id} post={post} />
              // console.log(post.id)
            ))}
        </div>
            
            
        </div>

        </Layouts>
        
       
    )
}
export default Player;
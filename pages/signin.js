import React, { Component, useContext, useEffect, useState} from 'react'
import Layouts from './components/Layouts'
import { VideoContext } from '../context/VideoContext'

import { data } from 'autoprefixer'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'

import Link from 'next/link'


export default function SignIn() {
    const {currentUser, handleUserAuth} = useContext(VideoContext)
    const [value, setValue] = useState(true)
    const signIn = () => {
        return(
            <div className='flex flex-col justify-center items-center'>
                <input placeholder='Username' className='pl-2 py-2 my-2 outline outline-2 offset-2 w-60 outline-gray-400 rounded-sm' />
                <input placeholder='Password' className='pl-2 py-2 my-2 outline outline-2 offset-2 w-60 outline-gray-400 rounded-sm' />
                <p className='text-sm text-gray-400'>Forgot password?</p>
                <button className='pl-2 py-2 my-2 bg-gray-500 outline-gray-400 rounded-sm w-60'>Log In</button>
                <button onClick={handleUserAuth} className='pl-2 py-2 my-2 bg-gray-500 outline-gray-400 rounded-sm w-60'>Google</button>
        </div>
        )    
    }

    const signOut = () => {
        return(
            <div className='flex flex-col justify-center items-center'>
                <input placeholder='First Name' className='pl-2 py-2 my-2 outline outline-2 offset-2 w-60 outline-gray-400 rounded-sm' />
                <input placeholder='Last Name' className='pl-2 py-2 my-2 outline outline-2 offset-2 w-60 outline-gray-400 rounded-sm' />
                <input placeholder='Username' className='pl-2 py-2 my-2 outline outline-2 offset-2 w-60 outline-gray-400 rounded-sm' />
                <input placeholder='Password' className='pl-2 py-2 my-2 outline outline-2 offset-2 w-60 outline-gray-400 rounded-sm' />
                <button className='pl-2 py-2 my-2 bg-gray-500 outline-gray-400 rounded-sm w-60'>Sign Up</button>
        </div>
        )    
    }

    


  return (
      <Layouts title="Girish Nandan Biography">
        <div className="flex flex-col justify-center items-center h-96">
            <div className='w-96 h-min py-6 rounded-sm bg-gray-800 flex flex-col justify-center items-center'>
                
                <div className='flex flex-col justify-center items-center'>
                    <div className="flex flex-row justify-between items-stretch w-56 my-4">
                    
                    <button onClick={() => setValue(true)} className="text-xl">Sign In</button>
                    <button onClick={() => setValue(false)} className="text-xl">Sign Up</button>
                    </div>
                    
                    <div className="flex flex-row justify-center items-center w-screen">
                        
                        {value === true ? signIn() : signOut()}
                    </div>     
                </div>
                
            </div>
            
        </div>
      </Layouts>
  )
}
import { React, Component, useContext } from 'react';
import Link from 'next/link'
import {CgProfile} from 'react-icons/cg'
import VideoContext from '../../context/VideoContext'

const Header = () => {
  // const {handleUserAuth} = useContext(VideoContext)

  return (
    <div className='flex flex-row justify-between h-12 bg-gray-700 items-center'>
      <div>
        <Link href='/'>
          <a className='mx-4 font-bold text-red-500'>Ytube</a>
        </Link>
      </div>

        <ul className='flex flex-row'>
          <li>
            <Link href='/signin'>
              <a className='mx-4'>
                <button className="outline outline-1 offset-1 p-1 px-3 outline-blue-500 text-blue-500 hover:text-blue-700 hover:outline-blue-700">Sign In</button>
              </a>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Header;

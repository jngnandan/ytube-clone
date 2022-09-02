import React, { Component } from 'react'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layouts = ({title, children, description, keywords, content, author}) => {
    return (
      <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author}/>
        </Head>
        <Header />

        <div className='pb-20 mx-6'>
            <div>{children}</div>
        </div>

        <Footer />

      </div>
    )
  }

export default Layouts

Layouts.defaultProps = { 
    title: 'Welcome to YTube',
    description: 'Find your Youtube videos',
    keywords: 'Youtube, Music, Videos',
    author: 'YTube',
    content: 'User Experiennce'
}
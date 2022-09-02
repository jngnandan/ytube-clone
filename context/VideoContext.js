import React, { Component } from 'react'
import {createContext, useEffect, useState, useContext} from 'react'
import Router, { useRouter } from 'next/router'

const VideoContext = createContext()

import {collection, getDocs, setDoc, doc, query, getFirestore} from 'firebase/firestore'
import {db, auth, provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'


const VideoProvider = ({children}) => {
    // const [videos, setVideos] = useState([])
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [thisPost, setThisPost] = useState(null)

    useEffect(() => {
        const getVideos = async () => {
        const querySnapshot = await getDocs(collection(db, 'videos'))
        setPosts(querySnapshot.docs.map(doc => {
            return{
                id: doc.id,
                data: {
                    name: doc.data().name,
                    url: doc.data().url,
                    description: doc.data().description,
                    likes: doc.data().likes,
                    like: doc.data().like,
                    dislikes: doc.data().dislikes,
                    channel: doc.data().channel,
                }
            }
        }))
    }
    getVideos()
}, [])

const addUserToFirebase = async user => {
    
    const db = getFirestore();
    const dbRef = collection(db, "users");
    const data = {
   email: user.email,
    name: user.displayName,
    image: user.photoURL,
};
    await setDoc(doc(dbRef, user.email), data);
};

const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider)
    const user = userData.user
    setCurrentUser(user)
    addUserToFirebase(user)

        const {pathname} = Router;
        Router.push('/')
}

const signOut = () => {
    // await auth.signOut()
    setCurrentUser(null)
}

    
const newPost = async (query) => {
    const currentPost = await setThisPost(posts.find(post => post.id === query.slug))

}


const addLike = async (query, thisPost) => {
          const db = getFirestore();
            const dbRef = collection(db, "videos");
            const data = {
               likes: parent(thisPost.data.likes) + 1,
               name: thisPost.data.name,
                url: thisPost.data.url,
                description: thisPost.data.description,
                like: true,
                channel: thisPost.data.channel,
            };   
            await setDoc(doc(dbRef, query.slug), data) && setThisPost(doc.data())
            console.log(thisPost)
    }

const notLike = async (query, thisPost) => {
          const db = getFirestore();
            const dbRef = collection(db, "videos");
            const data = {
               likes: parent(thisPost.data.likes) - 1,
               name: thisPost.data.name,
                url: thisPost.data.url,
                description: thisPost.data.description,
                like: false,
                channel: thisPost.data.channel,
            };   
            await setDoc(doc(dbRef, query.slug), data) && setThisPost(doc.data())
    }



return(
    <VideoContext.Provider value={{posts, currentUser, handleUserAuth, user, thisPost, signOut, addLike, notLike, newPost}}>
        {children}
    </VideoContext.Provider>
)
}
export {VideoContext, VideoProvider};
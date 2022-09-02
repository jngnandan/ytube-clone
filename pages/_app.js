import '../styles/globals.css'
import {VideoProvider} from '../context/VideoContext'

function MyApp({ Component, pageProps }) {
  return(
    <VideoProvider>
    <Component {...pageProps} />
    </VideoProvider>
  ) 
}

export default MyApp

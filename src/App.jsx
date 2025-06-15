import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoContext from './Context/VideoContext'
import Videos from './Components/Videos'
import Comments from './Components/Comments'

function App() {
const {video , setVideo}=useContext(VideoContext)
  return (
    <>
    <Videos />
    <Comments />
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VideoProvider from './Context/VideoProvider.jsx'
import CommentsProvider from './Context/CommentsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <VideoProvider>
    <CommentsProvider>
  <StrictMode>
    <App />
  </StrictMode>
    </CommentsProvider>
  </VideoProvider>
)

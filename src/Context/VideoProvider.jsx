import React, { useEffect, useState } from "react";
import VideoContext from "./VideoContext";

const VideoProvider = ({ children }) => {
    const [video, setVideo] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   const getVideo= async () => {
       const url = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json'
     try {
             const response = await fetch(url);
             if (!response.ok) {
                 throw new Error(`Response status: ${response.status}`);
             }

             const result = await response.json();
        
             setVideo(result)
             setLoading(false)
     
            } catch (error) {
                console.error(error.message);
                setLoading(false)
         }   
     }
setTimeout(()=>{
getVideo()
},2000)



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <VideoContext value={{ video, setVideo }}>
                {children}
            </VideoContext>
        </>
    )
}
export default VideoProvider
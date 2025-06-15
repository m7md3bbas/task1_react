import React, { useContext } from "react";
import VideoContext from "../Context/VideoContext";
import Card from "./Card";


const Videos = () => {
    const { video, setVideo } = useContext(VideoContext)

    return (
        <>
        <h1>Videos</h1>
            <div className="cards">
                {video.map((v, i) => (
                    <Card key={i} title={v.title} thumbnailUrl={v.thumbnailUrl} videoUrl={v.videoUrl} />
                ))}
            </div>
        </>
    )
}
export default Videos;
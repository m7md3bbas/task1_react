import React from "react";
const Card = ({ title, thumbnailUrl, videoUrl
})=>{

return(
    <>
    <div className="card">
        <figure>
            <video src={videoUrl} alt="" 
            autoPlay loop
            muted
            playsInline
            controls
            />
        </figure>
        <h3>{title}</h3>
    
    </div>
    </>
)
}
export default Card;
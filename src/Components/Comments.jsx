import React, { useContext } from "react";
import CommentsContext from "../Context/CommentsContext";

const Comments =()=>{
    const { comment , setComment}=useContext(CommentsContext)
return(
    <>
    <h1>Comments</h1>
    <div className="cards">

    {comment.map((c , i)=>(
        <div className="card" key={i}>
    
            <h3>My Comment:{c.body}</h3>
        </div>
       
    ))}
    </div>
    </>
)
}
export default Comments;
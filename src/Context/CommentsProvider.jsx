import React, { useEffect, useState } from "react";
import CommentsContext from "./CommentsContext";

const CommentsProvider = ({ children }) => {
    const [comment, setComment] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   const getComment= async () => {
       const url = 'https://dummyjson.com/comments'
         try {
             const response = await fetch(url);
             if (!response.ok) {
                 throw new Error(`Response status: ${response.status}`);
             }

             const result = await response.json();
        
             setComment(result.comments)
             setLoading(false)
             
            } catch (error) {
                console.error(error.message);
                setLoading(false)
         }   
     }
setTimeout(()=>{
getComment()
},2000)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <CommentsContext value={{ comment, setComment }}>
                {children}
            </CommentsContext>
        </>
    )
}
export default CommentsProvider

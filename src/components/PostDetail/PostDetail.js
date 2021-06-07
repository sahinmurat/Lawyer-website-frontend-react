import React from 'react'
import { useLocation } from "react-router-dom";

function PostDetail() {
    const location = useLocation();
    const myparam = location.state.params;
    console.log('params', myparam)
    return (
        <div>
            <p> {myparam.item.title}</p>
            <p>{myparam.item.content}</p>
            <img src={myparam.item.image} alt="ilgili resim" />
        </div>
    )
}

export default PostDetail


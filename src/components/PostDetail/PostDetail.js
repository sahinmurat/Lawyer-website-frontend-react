import React from 'react'
import { useLocation } from "react-router-dom";
import './PostDetail.css'

function PostDetail() {
    const location = useLocation();
    const myparam = location.state.params;
    console.log('params', myparam)
    return (
        <div>
            <div className='detailWrapper'
                dangerouslySetInnerHTML={{
                    __html: myparam.item.content,
                }}
            ></div>
        </div>
    )
}

export default PostDetail


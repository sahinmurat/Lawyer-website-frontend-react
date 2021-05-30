import React, {useEffect, useState} from 'react'
import axios from 'axios'



function Blog() {
    const [list , setList] = useState([])

useEffect(()=>{
    fetchData()
}, [])

const fetchData = async () => {
    var result = await axios.get('https://emirback.herokuapp.com/list');
    setList(result.data.results);
    console.log('result.data', result.data.results);
}

    return (
        <div>
           <h2> Blog  Page </h2> 
           <p>Last Content</p>
           <p> author : {list[0]?.author}</p>
           <p>category : {list[0]?.category}</p>
           <p>title : {list[0]?.title}</p>
           <p>related image</p>
           <img src={list[0]?.image} alt='content' />
        </div>
    )
}

export default Blog

import React, {useEffect, useState} from 'react'
import axios from 'axios'



function Blog() {
    const [list , setList] = useState([])

useEffect(()=>{
    fetchData()
}, [])

const fetchData = async () => {
    var result = await axios.get('https://emirback.herokuapp.com/list');
    setList(result);
    console.log(result);
}

    return (
        <div>
           <h2> Blog  Page </h2> 
           <p>Last Content</p>
           <p>{JSON.stringify(list)}</p>
        </div>
    )
}

export default Blog

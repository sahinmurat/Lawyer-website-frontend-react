import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import './Blog.css'

function Blog() {
    const [list, setList] = useState([])
    const history = useHistory();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        var result = await axios.get('https://emirback.herokuapp.com/list');
        setList(result.data.results);
        console.log('result.data', result.data.results);
    }
 
    return (
        <div>
            <h2 class="blog-title "> En Son Eklenenler </h2>
            {
                list?.map((item, index) => {
                    return(
                        <h5 class="post-title" key= {index} onClick={() => history.push(`/makale/${item.title}`, { params: { item } })} >{item.title}</h5>
                    )
                })
            }
        </div>
    )
}

export default Blog

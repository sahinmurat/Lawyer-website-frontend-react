import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './BlogStyle.css'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    circular: {
        textAlign: 'center',
        backgroundColor: '#191970'
    }
}));

function Blog() {
    const [list, setList] = useState([])
    const history = useHistory();
    const classes = useStyles();


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        var result = await axios.get('https://emirback.herokuapp.com/list');
        setList(result.data.results);
    }
    console.log(list)
    return (
        <div id='blogPage'>
            <div className='backgroundEffeckt'>
            </div>
            <div className='blogText'>
            <h2 className="blog-title "> GÜNCEL BiLGiLER </h2>
            {list.length > 0 ? list.map((item, index) => {
                return (
                    <h5 className="post-title" key={index} onClick={() => history.push(`/makale/${item.title}`, { params: { item } })} >- {item.title}</h5>
                )
            }) : <div className={classes.root}>
                <CircularProgress className={classes.circular} color="secondary" />
            </div>}
            </div>
            

        </div> 
    )
}

export default Blog

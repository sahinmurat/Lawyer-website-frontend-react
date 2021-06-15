import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress'

import './BlogStyle.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
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
        console.log('result.data', result.data.results);
    }
 
    return (
        <div>
            <h2 class="blog-title "> En Son Eklenenler </h2>
{list ? list.map((item, index) => {
                    return(
                        <h5 class="post-title" key= {index} onClick={() => history.push(`/makale/${item.title}`, { params: { item } })} >{item.title}</h5>
                    )
                }) : <div className={classes.root}>
                        <LinearProgress color="secondary" />
                        <CircularProgress color="secondary" />
                        <LinearProgress color="secondary" />
                    </div>}


            {/* {
                list?.map((item, index) => {
                    return(
                        <h5 class="post-title" key= {index} onClick={() => history.push(`/makale/${item.title}`, { params: { item } })} >{item.title}</h5>
                    )
                })
            } */}
        </div>
    )
}

export default Blog

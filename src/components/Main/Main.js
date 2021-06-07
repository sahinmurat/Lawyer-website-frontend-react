import React from 'react'
import About from '../About/About'
import Activity from '../Activity/Activity'
import Connection from '../Connection/Connection'
import Header from '../Header/Header'
import Blog from '../BlogPage/Blog'

function Main() {
    return (
        <div >
            <Header />
            <About />
            <Activity />
            <Blog/>
            <Connection />
        </div>
    )
}

export default Main

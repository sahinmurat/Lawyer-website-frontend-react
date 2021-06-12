import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useContext } from 'react';
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import { AuthContext } from '../App'
import PostDetail from "../components/PostDetail/PostDetail";

const AppRouter = () => {
    const { token } = useContext(AuthContext);
    console.log('token', token)
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/makale/:slug' component={PostDetail} />
                <Route exact path='/detail/:area' component={Detail} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter

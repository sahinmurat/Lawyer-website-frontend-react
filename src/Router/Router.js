import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import Activity from "../components/Activity/Activity";
import Connection from "../components/Connection/Connection";
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/detail/:area' component={Detail} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter

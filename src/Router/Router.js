import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import Activity from "../components/Activity/Activity";
import Connection from "../components/Connection/Connection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Header} />
            </Switch>
            <About />
            <Activity/>
            <Connection />
            <Footer/>
        </Router>
    )
}

export default AppRouter

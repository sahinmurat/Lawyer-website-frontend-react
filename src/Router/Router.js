import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Footer from "../components/Footer/Footer";
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

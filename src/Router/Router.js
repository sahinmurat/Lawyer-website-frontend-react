import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const AppRouter = () => {
    return (
       <Router>
           <Navbar/>
           <Switch>
               <Route exact path='/' component={Main} />
           </Switch>
       </Router>
    )
}

export default AppRouter

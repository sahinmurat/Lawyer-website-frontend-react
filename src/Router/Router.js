import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Connection from "../components/Connection/Connection";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const AppRouter = () => {
    return (
       <Router>
           <Navbar/>
           <Switch>
               <Route exact path='/' component={Header} />
           </Switch>
           <Connection/>
       </Router>
    )
}

export default AppRouter

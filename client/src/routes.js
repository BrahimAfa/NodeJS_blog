import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Articles from "./Components/pages/Articles";
import AboutUs from './Components/pages/AboutUs';
import Single from './Components/ArticleDetails/Single';
import Add from './Components/Actions/Add/Add'
const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/articles" exact component={Articles} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/articles/:id" exact component={Single} />
            <Route path="/add" exact component={Add} />
        </Switch>
    )
}
export default Routes;

import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Articles from "./Components/pages/Articles";
import AboutUs from './Components/pages/AboutUs';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/articles" exact component={Articles} />
            <Route path="/aboutus" exact component={AboutUs} />

        </Switch>
    )
}
export default Routes;

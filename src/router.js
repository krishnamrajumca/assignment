import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './home';
  import About from './about'
const RouterConfig = ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
        </Switch>
    )
}

export default RouterConfig;
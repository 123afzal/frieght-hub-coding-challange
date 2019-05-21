import React from 'react';

import {Route, Router, browserHistory} from 'react-router';

import Home from './containers/Home/Home';



const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
        </Router>
    )
};

export default Routes;


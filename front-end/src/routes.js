import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './containers/Home/Home';
import Shipments from './containers/Shipments/Shipments';



const Routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Shipments} />
                <Route path="" component={Shipments}/>
            </Route>
        </Router>
    )
};

export default Routes;


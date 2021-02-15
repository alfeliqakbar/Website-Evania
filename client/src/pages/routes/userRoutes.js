import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from '../Home'
import OrderPage from '../Order'
import PickupPage from '../Pickup'
import TrackPage from '../Track'
import RatesPage from '../Rates' 

export default function UserRoutes() {
    
    return (
        <Router>
            <Switch>
                <Route path='/home' component={Home} exact />
                <Route path='/track' component={TrackPage} exact />
                <Route path='/rates' component={RatesPage} exact />
                <Route path='/order' component={OrderPage} exact />
                <Route path='/pickup' component={PickupPage} exact />
            </Switch>
        </Router>
    )
}


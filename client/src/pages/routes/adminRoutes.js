import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminPage from '../Admin'

export default function AdminRoutes () {

    return(
        <Router>
            <Switch>
                <Route exact path='/admin' component={AdminPage} />
            </Switch>
        </Router>
    )
}
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import './App.css'
import OrderPage from './Order'
import SigninPage from './Signin'
import RegisterPage from './Register'
import PickupPage from './Pickup'
import ProfilePage from './Profile'
import MyorderPage from './Myorder'
import TrackPage from './Track'
import RatesPage from './Rates' 
import AdminPage from './Admin'
import LoginAdmin from './LoginAdmin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={SigninPage} exact/>
        <Route path='/admin-login' component={LoginAdmin} exact/>
        <Route path='/home' component={Home} exact/>
        <Route path='/track' component={TrackPage} exact/>
        <Route path='/rates' component={RatesPage} exact/>
        <Route path='/register' component={RegisterPage} exact/>
        <Route path='/order' component={OrderPage} exact/>
        <Route path='/pickup' component={PickupPage} exact/>
        <Route path='/profile' component={ProfilePage} exact />
        <Route path='/myorder' component={MyorderPage} exact />
        <Route path='/admin' component={AdminPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

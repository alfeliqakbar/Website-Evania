import React, {useState, useEffect} from 'react'
import axios from 'axios'
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
import ProtectedRoutes from '../components/ProtectedRoutes'


function App() {
  const [isAuth, setIsAuth] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/isUserAuth' , {
      headers: {
        'x-access-token' : localStorage.getItem("token")
      }
    }).then((response) => {
      // console.log(response)
      if(response.data == null){
        setIsAuth(false)
      }else{
        setIsAuth(true)
        console.log(response)
      }
    })
    }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' component={SigninPage} exact/>
        <Route path='/admin-login' component={LoginAdmin} exact/>
        {/* <Route path='/home' component={Home} exact/> */}
        <Route path='/track' component={TrackPage} exact/>
        <Route path='/rates' component={RatesPage} exact/>
        <Route path='/register' component={RegisterPage} exact/>
        <Route path='/order' component={OrderPage} exact/>
        <Route path='/pickup' component={PickupPage} exact/>
        <Route path='/profile' component={ProfilePage} exact />
        <Route path='/myorder' component={MyorderPage} exact />
        <Route path='/admin' component={AdminPage} exact />
        <ProtectedRoutes path='/home' component={Home} isAuth={isAuth}/>
      </Switch>
    </Router>
  );
}

export default App;

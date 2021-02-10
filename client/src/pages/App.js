import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import './App.css'
import OrderPage from './Order'
import SigninPage from './Signin'
import RegisterPage from './Register'
import PickupPage from './Pickup'
import TrackPage from './Track'
import RatesPage from './Rates' 
import AdminPage from './Admin'
import LoginAdmin from './LoginAdmin'
// import ProfilePage from './Profile'
// import MyorderPage from './Myorder'
import ProtectedRoutes from '../components/ProtectedRoutes'
import RegristrationAdmin from './RegristrationAdmin'


function App() {
  const [isAuth, setIsAuth] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/isUserAuth' , {
      headers: {
        'x-access-token' : localStorage.getItem("token")
      }
    }).then((response) => {
      // console.log(response.data.auth)
      if(response.data.auth === false){
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
        <Route path='/admin-reg' component={RegristrationAdmin} exact/>
        <Route path='/register' component={RegisterPage} exact/>
        <Route path='/admin' component={AdminPage} exact />
        <ProtectedRoutes path='/home' component={Home} isAuth={isAuth}/>
        <ProtectedRoutes path='/track' component={TrackPage} isAuth={isAuth}/>
        <ProtectedRoutes path='/rates' component={RatesPage} isAuth={isAuth}/>
        <ProtectedRoutes path='/order' component={OrderPage} isAuth={isAuth}/>
        <ProtectedRoutes path='/pickup' component={PickupPage} isAuth={isAuth}/>
      {/* <Route path='/home' component={Home} exact/> */}
      {/* <Route path='/track' component={TrackPage} exact/>
      <Route path='/rates' component={RatesPage} exact/>
      <Route path='/order' component={OrderPage} exact/>
      <Route path='/pickup' component={PickupPage} exact/> */}
      {/* <Route path='/profile' component={ProfilePage} exact />
      <Route path='/myorder' component={MyorderPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;

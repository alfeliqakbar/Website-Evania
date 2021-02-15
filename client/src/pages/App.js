import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import './App.css'

import SigninPage from './Signin'
import RegisterPage from './Register'


import LoginAdmin from './LoginAdmin'
// import ProfilePage from './Profile'
// import MyorderPage from './Myorder'

import RegristrationAdmin from './RegristrationAdmin'
import UserRoutes from './routes/userRoutes'
import AdminRoutes from './routes/adminRoutes'


function App() {
  const [isAuth, setIsAuth] = useState()
  const [isAdminAuth, setIsAdminAuth] = useState()
  const history = useHistory()

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
        // history.push('/home')
      }
    })
    }, [history])

    useEffect(() => {
      axios.get('http://localhost:3001/isAdminAuth' , {
        headers: {
          'x-access-token' : localStorage.getItem("token")
        }
      }).then((response) => {
        // console.log(response.data.auth)
        if(response.data.auth === false){
          setIsAdminAuth(false)
        }else{
          setIsAdminAuth(true)
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
        {/* {isAdminAuth && <AdminRoutes/>} */}
        {isAuth && <UserRoutes/>}
        
        
      </Switch>
    </Router>
  );
}

export default App;

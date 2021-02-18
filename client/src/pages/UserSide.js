import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SigninPage from './Signin'
import RegisterPage from './Register'
import UserRoutes from './routes/userRoutes'

export const LoginContext = createContext()

export default function UserSide() {
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
                <LoginContext.Provider value={{setIsAuth}}>
                    <Route exact path='/register' component={RegisterPage} />
                    {isAuth && <UserRoutes/>}
                    <Route exact path='/' component={SigninPage} />
                </LoginContext.Provider>
            </Switch>
        </Router>
    )
}
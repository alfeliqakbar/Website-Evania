import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LoginAdmin from './LoginAdmin'
import RegristrationAdmin from './RegristrationAdmin'
import AdminRoutes from './routes/adminRoutes'

export const LoginAdminContext = createContext()

export default function AdminSide() {
    const [isAdminAuth, setIsAdminAuth] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/isAdminAuth' , {
            headers: {
                'x-access-token' : localStorage.getItem("Bearer" + " " + "token")
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
                <LoginAdminContext.Provider value={{setIsAdminAuth}}>
                    
                    <Route exact path='/admin-reg' component={RegristrationAdmin} />
                    {/* {isAdminAuth && <AdminRoutes/>} */}
                    {isAdminAuth ? <AdminRoutes/> : <Route exact path='/admin-login' component={LoginAdmin} />}
                </LoginAdminContext.Provider>
                
            </Switch>
        </Router>
    )
}



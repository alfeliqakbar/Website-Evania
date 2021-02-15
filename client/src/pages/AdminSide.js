import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import LoginAdmin from './LoginAdmin'
import RegristrationAdmin from './RegristrationAdmin'
import AdminRoutes from './routes/adminRoutes'

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
                <Route exact path='/admin-login' component={LoginAdmin} />
                <Route exact path='/admin-reg' component={RegristrationAdmin} />
                {isAdminAuth && <AdminRoutes/>}
            </Switch>
        </Router>
    )
}



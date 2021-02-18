import React, { useContext} from 'react'
import axios from 'axios'

import {IconContext} from 'react-icons/lib'

import {Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink } from './NavbarElements'
import { LoginAdminContext } from '../../../pages/AdminSide'

const AdminNavbar = () => {
    const {setIsAdminAuth} = useContext(LoginAdminContext)

    const logout = () => {
        axios.get('http://localhost:3001/loginAdmin')
        .then((response) => {
            console.log(response.data.loggedIn)
            if(response.data.loggedIn === false){
                localStorage.removeItem("Bearer" + " " + "token")
                setIsAdminAuth(false)
            }else{
                localStorage.removeItem("Bearer" + " " + "token")
                setIsAdminAuth(false)
            }
                
        })
    }
    
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav >
                <NavbarContainer>
                    <NavLogo to ='/admin'>Evania</NavLogo>
                    
                    <NavBtn>
                        <NavBtnLink onClick={logout} to='/admin-login'>Sign Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default AdminNavbar

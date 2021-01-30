import React from 'react'

import {IconContext} from 'react-icons/lib'

import {Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink } from './NavbarElements'

const AdminNavbar = () => {

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav >
                <NavbarContainer>
                    <NavLogo to ='/admin'>Evania</NavLogo>
                    
                    <NavBtn>
                        <NavBtnLink to='/'>Sign Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default AdminNavbar

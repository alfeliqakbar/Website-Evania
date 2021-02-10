import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './simpleNavbarElement'

const SimpleNavbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if ( window.scrollY >= 80) {
            setScrollNav (true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const logout = () => {
        axios.get('http://localhost:3001/login')
        .then((response) => {
            console.log(response.data.loggedIn)
            if(response.data.loggedIn === false)
                localStorage.removeItem("token")
        })
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to ='/' onClick={toggleHome}>Evania</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/track' >Track</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/rates' >Rates</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/order'>Order</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/pickup'  >Pickup</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='/register'>Signup</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={logout} to='/' >Sign Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default SimpleNavbar

import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { LoginContext } from '../../../pages/UserSide'

const Navbar = ({toggle}) => {
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

    const {setIsAuth} = useContext(LoginContext)
    
    const logout = () => {
        axios.get('http://localhost:3001/login')
        .then((response) => {
            console.log(response.data.loggedIn)
            if(response.data.loggedIn === false){
                localStorage.removeItem("token")
                setIsAuth(false)
            }else{
                localStorage.removeItem("token")
                setIsAuth(false)
            }
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
                            <NavLinks to='track' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Track</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Signup</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={logout} to='/'>Sign Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

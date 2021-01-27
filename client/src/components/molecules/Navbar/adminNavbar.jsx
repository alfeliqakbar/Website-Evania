import React from 'react'
// import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
// import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink } from './NavbarElements'

const AdminNavbar = () => {
    // const [scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //     if ( window.scrollY >= 80) {
    //         setScrollNav (true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, []);

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav >
                <NavbarContainer>
                    <NavLogo to ='/admin'>Evania</NavLogo>
                    
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default AdminNavbar

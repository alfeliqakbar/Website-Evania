import React, {useState} from 'react'
import {Sidebar, Navbar} from '../components'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import Profile from '../components/molecules/Profile'

const ProfilePage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Profile/>
            <SimpleFooter />
        </>
    )
}

export default ProfilePage

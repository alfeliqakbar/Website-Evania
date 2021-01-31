import React, {useState} from 'react'
import {Sidebar} from '../components'
import Track from '../components/molecules/Track'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import SimpleNavbar from '../components/molecules/Navbar/simpleNavbar'

const TrackPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            
            <SimpleNavbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Track/>
            <SimpleFooter />
        </>
    )
}

export default TrackPage

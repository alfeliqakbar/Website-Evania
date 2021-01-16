import React, {useState} from 'react'
import {Sidebar, Navbar} from '../components'
import Track from '../components/molecules/Track'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'

const TrackPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Track/>
            <SimpleFooter />
        </>
    )
}

export default TrackPage

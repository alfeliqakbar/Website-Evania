import React, {useState} from 'react'
import {Sidebar, Navbar} from '../components'
import Drop from '../components/molecules/Order'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'

const PickupPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Drop />
            <SimpleFooter />
        </>
    )
}

export default PickupPage

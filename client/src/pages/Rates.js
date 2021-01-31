import React, {useState} from 'react'
import {Sidebar,} from '../components'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import SimpleNavbar from '../components/molecules/Navbar/simpleNavbar'
import Rates from '../components/molecules/Rates'

const RatesPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            
            <SimpleNavbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Rates/>
            <SimpleFooter />
        </>
    )
}

export default RatesPage

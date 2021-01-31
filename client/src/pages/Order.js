import React, {useState} from 'react'
import {Sidebar} from '../components'
import Order from '../components/molecules/Order'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import SimpleNavbar from '../components/molecules/Navbar/simpleNavbar'

const OrderPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            
            <SimpleNavbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Order />
            <SimpleFooter />
        </>
    )
}

export default OrderPage

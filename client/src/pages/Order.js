import React, {useState} from 'react'
import {Sidebar, Navbar} from '../components'
import Order from '../components/molecules/Order'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'

const OrderPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Order />
            <SimpleFooter />
        </>
    )
}

export default OrderPage

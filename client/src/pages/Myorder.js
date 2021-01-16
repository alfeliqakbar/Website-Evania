import React, {useState} from 'react'
import {Sidebar, Navbar} from '../components'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import Myorder from '../components/molecules/Myorder'

const MyorderPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Myorder/>
            <SimpleFooter />
        </>
    )
}

export default MyorderPage

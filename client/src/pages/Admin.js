import React, {useState} from 'react'
import {Sidebar, Navbar, Gap} from '../components'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import { Admin } from '../components/molecules'
import AdminNavbar from '../components/molecules/Navbar/adminNavbar'

const AdminPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <AdminNavbar/>
            <Gap height={100}/>
            <Admin/>
            <Gap height={100}/>
            <SimpleFooter />
        </>
    )
}



export default AdminPage

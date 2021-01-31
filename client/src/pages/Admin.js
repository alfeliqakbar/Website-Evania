import React from 'react'
import { Gap} from '../components'
import SimpleFooter from '../components/molecules/Footer/simpleFooter.js'
import { Admin } from '../components/molecules'
import AdminNavbar from '../components/molecules/Navbar/adminNavbar'

const AdminPage = () => {
    
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

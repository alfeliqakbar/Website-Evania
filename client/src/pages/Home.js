import React, {useState} from 'react'
import {HeroSection, Navbar, Sidebar, InfoSection, Services ,Footer} from '../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/molecules/InfoSection/Data'



const Home = () => {
    const[isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection /> 
            <InfoSection {...homeObjOne}/>
            <Services/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <Footer/>
        </>
    )
}

export default Home

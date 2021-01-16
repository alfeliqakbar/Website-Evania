import React from 'react'
import {ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElement'
import Icon1 from '../../../assets/Images/on-the-way.svg'
import Icon2 from '../../../assets/Images/takeout-boxes.svg'
import Icon3 from '../../../assets/Images/calculator.svg'


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to='/track'>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Cek Ongkir</ServicesH2>
                    <ServicesP>Akses dari mana saja</ServicesP>
                </ServicesCard>
                <ServicesCard to="/pickup">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Pickup</ServicesH2>
                    <ServicesP>Akses dari mana saja</ServicesP>
                </ServicesCard>
                <ServicesCard to='/order'>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Order</ServicesH2>
                    <ServicesP>Akses dari mana saja</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

import React from 'react'
import OrderCard from '../../atoms/Card'
import {Container, Wrap, H1, Content, Card,} from './MyorderElements'

const Myorder = () => {
    return (
        <>
            <Container>
                <Wrap>
                    <H1 to='/'>|My Order</H1>
                    <Content>
                        <Card action='#'>
                            
                            <OrderCard/>
                        </Card>
                    </Content>
                </Wrap>
            </Container>
        </>
        )
}

export default Myorder

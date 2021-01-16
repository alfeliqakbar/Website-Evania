import React from 'react'


import {Container, Card, CardPreview, Title, Caption, CaptionLinks, CardInfo, SmallInfo, CardButton } from './CardElements'


const OrderCard = () => {
    return (
        <Container>
            <Card>
                <CardPreview>
                    <Title>Sender</Title>
                    <Caption>Sarimin </Caption>
                    <CaptionLinks>On Process</CaptionLinks>
                </CardPreview>
                <CardInfo>
                    <SmallInfo>
                    13482309948
                    </SmallInfo>
                    <Title>Receiver</Title>
                    <Caption>Jojo Hartono</Caption>
                    <CardButton>Cancel</CardButton>
                </CardInfo>
            </Card>
        </Container>
    )
}

export default OrderCard

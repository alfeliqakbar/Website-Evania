import React from 'react'
import { Gap } from '../../atoms'
import { Container, FormWrap, FormContent, Form, FormLabel, FormH1, FormInput, FormButton } from '../Signin/SigninElements'

const Pickup = () => {
    return (
        <Container>
            <Gap height={80} />
            <FormWrap>
                <FormContent>
                    <Form>
                        <FormH1>Sender Information</FormH1>
                        <FormLabel htmlFor='for'>Nama</FormLabel>
                        <FormInput type='nama' placeholder='Nama Lengkap' required/>
                        <FormLabel htmlFor='for'>Phone Number</FormLabel>
                        <FormInput type='phone number' placeholder='ex: 08**********' required />
                        <FormLabel htmlFor='for'>Origin City</FormLabel>
                        <FormInput type='phone number' placeholder='ex: JAKARTA PUSAT' required />
                        <FormLabel htmlFor='for'>Post Code</FormLabel>
                        <FormInput type='phone number' placeholder='ex: 11210' required />
                        <FormLabel htmlFor='for'>Address</FormLabel>
                        <FormInput type='phone number' required />
                    </Form>
                    <Gap height={30} />
                    <Form>
                        <FormH1>Recipient Information</FormH1>
                        <FormLabel htmlFor='for'>Nama</FormLabel>
                        <FormInput type='nama' placeholder='Nama Lengkap' required/>
                        <FormLabel htmlFor='for'>Phone Number</FormLabel>
                        <FormInput type='phone number' placeholder='ex: 08**********' required />
                        <FormLabel htmlFor='for'>Destination City</FormLabel>
                        <FormInput type='phone number' placeholder='ex: JAKARTA PUSAT' required />
                        <FormLabel htmlFor='for'>Post Code</FormLabel>
                        <FormInput type='phone number' placeholder='ex: 11210' required />
                        <FormLabel htmlFor='for'>Address</FormLabel>
                        <FormInput type='phone number' required />
                    </Form>
                    <Gap height={30} />
                    <Form>
                        <FormH1>Package Information</FormH1>
                        <FormLabel htmlFor='for'>Item Name</FormLabel>
                        <FormInput type='nama' placeholder='Nama Barang' required/>
                        <FormLabel htmlFor='for'>Quantity</FormLabel>
                        <FormInput type='quantity' placeholder='ex: 1' />
                        <FormLabel htmlFor='for'>Weight</FormLabel>
                        <FormInput type='weight' placeholder='ex: 1kg' required />
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
            <Gap height={40} />
        </Container>
    )
}

export default Pickup

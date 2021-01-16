import React, {useState} from 'react'
import { Gap } from '../../atoms'
import axios from 'axios'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from '../Signin/SigninElements'

const Register = () => {
    
    const [nameReg, setNameReg] = useState('')
    const [phoneReg, setPhoneReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState ('')

    axios.defaults.withCredentials = true
    const register = () => {
        axios.post('http://localhost:3001/register', {
            name: nameReg,
            email: emailReg,
            phone: phoneReg,
            password: passwordReg
        }).then((response) => {
            console.log(response)
        })
    }

    

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Evania</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Register new account</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='fullname' placeholder='FullName' onChange={(e) => {
                                setNameReg(e.target.value)
                            }} required/>
                            <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput type='phone' placeholder='08**********' onChange={(e) => {
                                setPhoneReg(e.target.value)
                            }} required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' placeholder='E-mail' onChange={(e) => {
                                setEmailReg(e.target.value)
                            }} required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' placeholder='Password' onChange={(e) => {
                                setPasswordReg(e.target.value)
                            }} required />
                            <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' placeholder='Confirm Password' required />
                            <Gap height={20}/>
                            <FormButton onClick={register} type='submit'>Register</FormButton>
                            <Text to='/signin'>Have an account? Login here</Text>
                        </Form>
                    </FormContent>
                    <Gap height={50} />
                </FormWrap>
            </Container>
        </>
    )
}

export default Register

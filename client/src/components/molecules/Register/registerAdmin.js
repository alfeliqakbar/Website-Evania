import React, {useState} from 'react'
import { Gap } from '../../atoms'
import axios from 'axios'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from '../Signin/SigninElements'

const RegisterAdmin = () => {
    
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState ('')

    axios.defaults.withCredentials = true
    const register = () => {
        axios.post('http://localhost:3001/registerAdmin', {
            email: emailReg,
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
                            <FormH1>Register Admin</FormH1>
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
                            <FormButton onClick={register} type='submit'style={{textDecoration: 'none', color: '#fff', textAlign: 'center'}}>Register</FormButton>
                            <Text to='/admin-login'>Login here</Text>
                        </Form>
                    </FormContent>
                    <Gap height={50} />
                </FormWrap>
            </Container>
        </>
    )
}

export default RegisterAdmin

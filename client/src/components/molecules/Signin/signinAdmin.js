import React, {useState} from 'react'
import { Gap } from '../../atoms'
import {Link} from 'react-router-dom'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from './SigninElements'
import axios from 'axios'

const SignInAdmin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    axios.defaults.withCredentials = true
    
    const login = () => {
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        }).then((response) => {
            if(!response.data.message){
                console.log(response.data.message)
            } else {
                console.log(response.data[0].name)
                
            }
        })
    }

    

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Evania</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in Admin</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' placeholder='E-mail' onChange={(e) => {
                                setEmail(e.target.value)
                            }} required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' placeholder='Password' onChange={(e) => {
                                setPassword(e.target.value)
                            }} required />
                            <Gap height={20} />
                            <FormButton type='submit' onClick={login} style={{textDecoration: 'none', color: '#fff', textAlign: 'center'}} to='/admin' >Sign In</FormButton>
                            <Text to='/admin-reg'>Doesn't have an account?</Text>
                            
                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignInAdmin

import React, {useState} from 'react'

import { Gap } from '../../atoms'

import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from './SigninElements'
import axios from 'axios'



const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState()
    
    

    axios.defaults.withCredentials = true
    
    const login = () => {
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data)   
            if(!response.data.auth){
                setLoginStatus(false)
                
            }else{
                setLoginStatus(true)
                
                localStorage.setItem("token", response.data.token)
                
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
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' placeholder='E-mail' onChange={(e) => {
                                setEmail(e.target.value)
                            }} required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' placeholder='Password' onChange={(e) => {
                                setPassword(e.target.value)
                            }} required />
                            <Gap height={20} />
                            <FormButton type='submit' onClick={login} style={{textDecoration: 'none', color: '#fff', textAlign:'center'}} to='/home' > Sign In</FormButton>
                            {/* <Text>Forgot Password ?</Text> */}
                            <Text to='/register'>Doesn't have an account?</Text>
                            <Text to='/admin-login'>Are you the Admin?</Text>
                            {loginStatus}
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}


export default SignIn

import React, {useState, useEffect} from 'react'
import { Gap } from '../../atoms'
import {Link} from 'react-router-dom'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from './SigninElements'
import axios from 'axios'

const SignIn = () => {
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

    // useEffect(() => {
    //     axios.get('http://localhost:3001/login')
    //     .then((response) => {
    //         if(response.data.loggedIn === true) {
    //             alert(response.data.user[0].name)
    //         }
    //     })

    // }, [])

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
                            <FormButton type='submit' onClick={login}><Link style={{textDecoration: 'none', color: '#fff'}} to ='/'>Sign In</Link></FormButton>
                            {/* <Text>Forgot Password ?</Text> */}
                            <Text to='/register'>Doesn't have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn

import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #eee;
`

export const FormWrap = styled.div`
    /* position: fixed; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const Icon = styled(Link)`
    margin-left: 9.5rem;
    margin-top: 22px;
    text-decoration: none;
    width: 100px;
    color: #d72323;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    
    }
`

export const FormContent = styled.div`
    height: 100%;
    margin-top: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        Justify-content: center;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #3a4750;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled(Link)`
    background: #d72323;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`
export const FormButtonB = styled.button`
    background: #d72323;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled(Link)`
    text-align: center;
    text-decoration: none;
    margin-top: 30px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
`
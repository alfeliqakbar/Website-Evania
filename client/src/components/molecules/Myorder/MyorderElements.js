import styled from 'styled-components'

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

export const Wrap = styled.div`
    height: 100%;
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const H1 = styled.h1`
    margin-left: 9.5rem;
    margin-top: 22px;
    text-decoration: none;
    width: 200px;
    color: #d72323;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    
    }
`

export const Content = styled.div`
    height: 100%;
    margin-top: 15px;
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

export const Card = styled.div`
    background: #3a4750;
    max-width: 80%;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 500px){
        padding: 32px 32px;
        max-width: 90%;
    }
`
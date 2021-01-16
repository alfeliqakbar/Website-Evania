import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const TrackContainer = styled.div`
    min-height: 692px;
    background: #eee;
    background: #eee;
    overflow: hidden;
    z-index: 0;
`

export const TrackWrapper = styled.div`
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

export const TrackTitle = styled.h1`
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

export const TrackContent = styled.div`
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
export const TrackForm = styled.form`
    background: #3a4750;
    height: auto;
    width: 60%;
    z-index: 1;
    display: grid;
    
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 700px){
        padding: 32px 32px;
        width: 80%;
    }
`

export const TrackBtnFormWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const TrackBtnForm = styled.button`
    background: #d72323;
    justify-content: center;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    width: 300px;
`

export const TrackBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const TrackButton = styled(LinkR)`
    border-radius : 50px;
    margin: 10px;
    background : #303841;
    white-space : nowrap;
    padding : 16px 50px;
    color : #eee;
    font-size : 1.2rem;
    outline : none;
    border : none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration : none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

    &.active {
        background-color: #d72323;
    }
`
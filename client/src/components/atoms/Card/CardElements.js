import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Card =styled.div`
	background-color: #eee;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
    width: 90%;
    white-space: none;
`

export const Title = styled.h6`
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
`

export const Caption = styled.h2`
	letter-spacing: 1px;
	margin: 10px 0;
`

export const CardPreview = styled.div`
	background-color: #d72323;
	color: #fff;
	padding: 30px;
	max-width: 250px;
	border-raduis: 8px;
`

export const CaptionLinks = styled.a`
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
`

export const CardInfo = styled.div`
	padding: 30px;
	position: relative;
	width: 100%;
`

export const SmallInfo = styled.span`
	font-size: 10px;
	opacity: 0.6;
	letter-spacing: 1px;
	float: right;
`

export const CardButton = styled.button`
	background-color: #d72323;
	border: 0;
	border-radius: 50px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-size: 16px;
	padding: 12px 25px;
	position: absolute;
	bottom: 30px;
	right: 30px;
    letter-spacing: 1px;
    
    &:hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`
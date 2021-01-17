// import axios from 'axios'
import React, {useState,
    // useEffect
} from 'react'

import { Gap } from '../../atoms'
import { FormInput } from '../Signin/SigninElements'
import {TrackBtnForm, TrackForm, TrackContainer, TrackWrapper, TrackBtnFormWrap, TrackTitle, TrackBtnWrap, TrackButton, TrackContent} from './TrackElements'


const Track = () => {
    const [userInput, setUserInput] = useState([])
    const [waybill, setWaybill] = useState('')
    const [senderName, setSenderName] = useState('')
    const [senderAddress, setSenderAddress] = useState('')
    const [recipientName, setRecipientName] = useState('')
    const [recipientAddress, setRecipientAddress] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemWeight, setItemWeight] = useState('')
    const [status, setStatus] = useState('')
    
    // useEffect(() => {
    //     fetch(`http://localhost:3001/api/v1/order-pickup/${userInput}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    

    const setData = ([{
            waybill_number, sender_name, sender_address, 
            recipient_name,  recipient_address,
            item_name, item_weight,status
    }]) => {
        setWaybill(waybill_number)
        setSenderName(sender_name)
        setSenderAddress(sender_address)
        setRecipientName(recipient_name)
        setRecipientAddress(recipient_address)
        setItemName(item_name)
        setItemWeight(item_weight)
        setStatus(status)
    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }
    
    const handleSubmit = () => {
        console.log(userInput)
        fetch(`http://localhost:3001/api/v1/order-pickup/${userInput}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
            console.log(data)
        })
        
    }

    // const List = ({waybill}) => {
    //     return (
    //         <li className="table-row">
    //             <div className="col col-1" >{waybill.waybill_number}</div>
    //             <div className="col col-2" >{waybill.sender_name}</div>
    //             <div className="col col-3" >{waybill.sender_address}</div>
    //             <div className="col col-4" >{waybill.recipient_name}</div>
    //             <div className="col col-5" >{waybill.recipient_address}</div>
    //             <div className="col col-6" >{waybill.item_name}</div>
    //             <div className="col col-7" >{waybill.item_weight}</div>
    //             <div className="col col-8" >{waybill.status}</div>
    //         </li>
    //     )
    // }    

    return (
        <TrackContainer>
            <TrackWrapper>
                <TrackTitle>|Track</TrackTitle>
                <Gap height={40} />
                <TrackBtnWrap>
                    <TrackButton to='/track' >Track</TrackButton>
                    <TrackButton to='/rates' >Rates</TrackButton>
                </TrackBtnWrap>
                <Gap height={30} />
                <TrackContent>
                    <TrackForm 
                    // onSubmit={handleSubmit}
                    onSubmit = {e => {
                        e.preventDefault()
                        handleSubmit(e)
                    }}
                    >
                        <FormInput placeholder='Please enter your waybill number'
                            onChange={handleSearch}
                            
                            required/>
                        <TrackBtnFormWrap>
                            
                            <TrackBtnForm type="submit"  >Search</TrackBtnForm>
                        </TrackBtnFormWrap>
                    </TrackForm>
                </TrackContent>
            </TrackWrapper>
            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Waybill</div>
                        <div className="col col-2">Sender</div>
                        <div className="col col-3">Sender Address</div>
                        {/* <div className="col col-4">Origin</div> */}
                        <div className="col col-4">Recipient</div>
                        <div className="col col-5">Recipient Address</div>
                        {/* <div className="col col-4">Destination</div> */}
                        <div className="col col-6">Item Name</div>
                        <div className="col col-7">Item Weight</div>
                        <div className="col col-8">Status</div>
                    </li>

                    {/* {waybill.map((w, index) => {
                        return<List key={index} waybill={w} />
                    })} */}
                    <li className="table-row">
                        <div className="col col-1" >{waybill}</div>
                        <div className="col col-2" >{senderName}</div>
                        <div className="col col-3" >{senderAddress}</div>
                        <div className="col col-4" >{recipientName}</div>
                        <div className="col col-5" >{recipientAddress}</div>
                        <div className="col col-6" >{itemName}</div>
                        <div className="col col-7" >{itemWeight}</div>
                        <div className="col col-8" >{status}</div>
                    </li>
                </ul>
            </div>
        </TrackContainer>
    )
}

export default Track


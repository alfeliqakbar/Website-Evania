import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Gap } from '../../atoms'
import { FormInput } from '../Signin/SigninElements'
import {TrackBtnForm, TrackForm, TrackContainer, TrackWrapper, TrackBtnFormWrap, TrackTitle, TrackBtnWrap, TrackButton, TrackContent} from './TrackElements'


const Track = () => {
    const [waybill, setWaybill] = useState({waybill_number:''})
    
    const putWaybillInfo = (e) => {
        setWaybill({...waybill,[e.target.name] : e.target.value})
    }

    const handleSubmit = () => {
        let waybill_number = waybill.waybill_number

        let waybillData = {
            waybill_number
        }
        console.log(waybillData)
        searchWaybill(waybillData)
        setWaybill({waybill_number:''})
    }
    
    const searchWaybill = data => {
        axios
            .get('http://localhost:3001/api/v1/order-pickup/:waybill_number', data)
            .then(d => {
                console.log(d)
            })
            .catch(err => alert(err))
    }

    return (
        <TrackContainer>
            <TrackWrapper>
                <TrackTitle>|Track</TrackTitle>
                <Gap height={40} />
                <TrackBtnWrap>
                    <TrackButton to='/track'>Track</TrackButton>
                    <TrackButton to='/rates'>Rates</TrackButton>
                </TrackBtnWrap>
                <Gap height={30} />
                <TrackContent>
                    <TrackForm onSubmit={e => {
                        e.preventDefault()
                        handleSubmit(e)}}>
                        <FormInput type='waybill' placeholder='Please enter your waybill number' onChange={putWaybillInfo}/>
                        <TrackBtnFormWrap>
                            <TrackBtnForm type="submit"  >Search</TrackBtnForm>
                        </TrackBtnFormWrap>
                    </TrackForm>
                </TrackContent>
            </TrackWrapper>
            <div className="container">
                {/* <h2>Order Data <small>Order : {order.length}</small></h2> */}
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
                        {/* {order.map((o, index) => {
                            return <List key={index} order={o}/>
                        })}
                 */}
                
                </ul>
            </div>
        </TrackContainer>
    )
}

export default Track

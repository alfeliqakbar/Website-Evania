import React, {useState, useEffect} from 'react'
import './index.scss'
import axios from 'axios'
import { Gap } from '../../atoms'


const Admin = () => {
    const [order, setOrder] = useState([])

    //componentDidMount
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/order-pickup')
            .then(res => res.json())
            .then(res => {
                setOrder(res)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    
    
    return (
            <div className="container">
                <h2>Order Data</h2>
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
                        {order.map((o, index) => {
                            return <List key={index} order={o}/>
                        })}
                </ul>
                <Gap height={20} />
                <h2>Delivered</h2>
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
                </ul> 
            </div>
    )
}
const List = ({order}) => {
    const [process, setProcess] = useState('')
    // const [delivered, setDelivered] = useState('')
    
    const handleClick = () => {
        let waybill = order.waybill_number
        
        axios.put(`http://localhost:3001/api/v1/order-pickup/${waybill}`)
        .then(res => res.json())
        .then()
        .catch(e => {
            console.log(e)
        })
        // .then(res => {
        //     if(order.status == 0){
        //         setProcess(1)
        //     }else{
        //         setProcess(0)
        //     }
        //     console.log(process)
    }
        
        
    
    
    return (
        <li className="table-row">
            <div className="col col-1" >{order.waybill_number}</div>
            <div className="col col-2" >{order.sender_name}</div>
            <div className="col col-3" >{order.sender_address}</div>
            <div className="col col-4" >{order.recipient_name}</div>
            <div className="col col-5" >{order.recipient_address}</div>
            <div className="col col-6" >{order.item_name}</div>
            <div className="col col-7" >{order.item_weight}</div>
            <button className="col col-8" onClick={() => handleClick()}>{order.status ? "On proccess" : "Delivered"}</button>
        </li>
    )
}
        

export default Admin



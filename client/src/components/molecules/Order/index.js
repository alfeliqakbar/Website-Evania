import React, {useState} from 'react'
import { Gap } from '../../atoms'
import axios from 'axios'
import { Container, FormWrap, FormContent, Form, FormLabel, FormH1, FormInput, FormButton } from '../Signin/SigninElements'
// import Modal from 'react-modal'
import Modal from '../../atoms/Modal'

const Order = () => {
    const [order, setOrderData] = useState({ sender_name:'', sender_phone:'', sender_address:'',origin_city:'',origin_postcode:'',
                                            recipient_name:'', recipient_phone:'', recipient_address:'',destination_city:'', destination_postcode:'',
                                            item_name:'', item_weight:''
                                    })

    const putOrderInfo = (e) => {
        setOrderData({...order,[e.target.name] : e.target.value})
    }

    const handleSubmit = () => {
        let sender_name = order.sender_name
        let sender_phone = order.sender_phone
        let sender_address =  order.sender_address
        let origin_city = order.origin_city
        let origin_postcode = order.origin_postcode
        let recipient_name = order.recipient_name
        let recipient_phone = order.recipient_phone
        let recipient_address =  order.recipient_address
        let destination_city = order.destination_city
        let destination_postcode = order.destination_postcode
        let item_name = order.item_name
        let item_weight = order.item_weight

        let orderData = {
            sender_name, sender_phone, sender_address, origin_city, origin_postcode, 
            recipient_name, recipient_phone, recipient_address, destination_city,  destination_postcode,
            item_name, item_weight
        }
        console.log(orderData)
        postOrder(orderData)
        setOrderData({sender_name:'', sender_phone:'', sender_address:'',origin_city:'',origin_postcode:'',
        recipient_name:'', recipient_phone:'', recipient_address:'',destination_city:'', destination_postcode:'',
        item_name:'', item_weight:''})
    }

    const postOrder = data => {
        axios
            .post('http://localhost:3001/api/v1/order-pickup', data)
            .then(d => {
                console.log(d)
            })
            .catch(err => alert(err))
    }

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.openModal()
    };

    // const [modalIsOpen, setModalIsOpen] = useState(false)
    
    return (
        <Container>
            {/* <Gap height={80} /> */}
            <FormWrap>
                <FormContent>
                    
                    <Modal ref={modalRef}>
                        <h1>Order Succes!</h1>
                        <p> Your waybill number :
                        <span></span>
                        </p>
                        <button onClick={() => modalRef.current.close()}>
                            Close
                        </button>
                    </Modal>
                    <Form 
                    onSubmit = {e => {
                        e.preventDefault()
                        handleSubmit(e)
                    }}>
                    {/* <Modal style={{zIndex: 100}} isOpen={modalIsOpen}>
                        <h2>Your Waybill Number : </h2>
                        <p>10000004</p>
                    </Modal> */}
                        <FormH1>Sender Information</FormH1>
                        <FormLabel htmlFor='for'>Nama</FormLabel>
                        <FormInput type='nama' name='sender_name' placeholder='Nama Lengkap' value={order.sender_name} onChange={putOrderInfo} required/>
                        <FormLabel htmlFor='for'>Phone Number</FormLabel>
                        <FormInput type='phone number' name='sender_phone' placeholder='ex: 08**********' value={order.sender_phone} onChange={putOrderInfo} required />
                        <FormLabel htmlFor='for'>Origin City</FormLabel>
                        <FormInput type='city' name='origin_city' placeholder='ex: JAKARTA PUSAT' required value={order.origin_city} onChange={putOrderInfo}/>
                        <FormLabel htmlFor='for'>Post Code</FormLabel>
                        <FormInput type='Postcode' name='origin_postcode' placeholder='ex: 11210' required value={order.origin_postcode} onChange={putOrderInfo} />
                        <FormLabel htmlFor='for' >Address</FormLabel>
                        <FormInput type='adrress' name='sender_address' required value={order.sender_address} onChange={putOrderInfo} />
                    </Form>
                    <Gap height={30} />
                    <Form 
                    onSubmit = {e => {
                        e.preventDefault()
                        handleSubmit(e)
                    }}>
                        <FormH1>Recipient Information</FormH1>
                        <FormLabel htmlFor='for'>Nama</FormLabel>
                        <FormInput name='recipient_name' value={order.recipient_name} onChange={putOrderInfo} placeholder='Nama Lengkap' required/>
                        <FormLabel htmlFor='for'>Phone Number</FormLabel>
                        <FormInput name='recipient_phone' value={order.recipient_phone} onChange={putOrderInfo} placeholder='ex: 08**********' required />
                        <FormLabel htmlFor='for'>Destination City</FormLabel>
                        <FormInput name='destination_city' value={order.destination_city} onChange={putOrderInfo} placeholder='ex: JAKARTA PUSAT' required />
                        <FormLabel htmlFor='for'>Post Code</FormLabel>
                        <FormInput name='destination_postcode' value={order.destination_postcode} onChange={putOrderInfo} placeholder='ex: 11210' required />
                        <FormLabel htmlFor='for'>Address</FormLabel>
                        <FormInput name='recipient_address' value={order.recipient_address} onChange={putOrderInfo} required />
                    </Form>
                    <Gap height={30} />
                    <Form onSubmit = {e => {
                        e.preventDefault()
                        handleSubmit(e)
                    }}>
                        <FormH1>Package Information</FormH1>
                        <FormLabel htmlFor='for'>Item Name</FormLabel>
                        <FormInput name='item_name' value={order.item_name} onChange={putOrderInfo} placeholder='Nama Barang' required/>
                        {/* <FormLabel htmlFor='for'>Quantity</FormLabel>
                        <FormInput name='quantity' placeholder='ex: 1' /> */}
                        <FormLabel htmlFor='for'>Weight</FormLabel>
                        <FormInput name='item_weight' value={order.item_weight} onChange={putOrderInfo} placeholder='ex: 1kg' required />
                        <FormButton type='submit' onClick={openModal}>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
            <Gap height={40} />
        </Container>
    )
}

export default Order

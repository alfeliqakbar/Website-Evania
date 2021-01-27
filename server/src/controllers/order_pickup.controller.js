const OrdersModel = require('../models/order_pickup.model')

// GET order_pickup list
exports.getOrderList = (req,res) => {
    // console.log('this is the order list')
    OrdersModel.getAllOrder((err, order) => {
        // console.log('we are here')
        if(err)
        res.send(err)
        // console.log('Orders', order)
        res.send(order)
    })
}

// GET order_pickup list by id
exports.getOrderByWaybill = (req, res) => {
    // console.log('get order by id')
    OrdersModel.getOrderByWaybill(req.params.waybill_number, (err, order) => {
        if(err){
            res.send(err)
        }else{
            res.send(order)
        }
            
    })
}

// POST new order_pickup
exports.createNewOrder = (req, res) => {
    const orderReqData = new OrdersModel(req.body)
    console.log('orderReqData', orderReqData)
    //check null
    if(req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({succes: false, message: 'Please fill all the fields'})
    }else{
        console.log('valid data')
        
        OrdersModel.createOrder(orderReqData, (err, order) => {
            if(err)
                res.send(err)
                res.json({status: true, message: 'Order created successfully', data: order.insertId})
        })
    }
}


// UPDATE order_pickup list
// exports.updateOrder = (req, res) => {
//     const orderReqData = new OrdersModel(req.body)
//     console.log('orderReqData update', orderReqData)
//     //check null
//     if(req.body.constructor === Object && Object(req.body).length === 0) {
//         res.send(400).send({succes: false, message: 'Please fill all the fields'})
//     }else{
//         console.log('valid order data')
        
//         OrdersModel.updateOrder(req.params.id, orderReqData, (err, order) => {
//             if(err)
//                 res.send(err)
//                 res.json({status: order.insertStatus, message: 'Order updated successfully', data: order.insertId})
//         })
//     }
// }

// UPDATE order-pickup status only
exports.updateOrder = (req, res) => {
    const orderReqData = new OrdersModel(req.body)
    console.log('orderReqData update', orderReqData)
    //check null
    if(req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({succes: false, message: 'Please fill the fields'})
    }else{
        console.log('valid order status')
        
        OrdersModel.updateOrder(req.params.waybill_number, orderReqData, (err, order) => {
            if(err)
                res.send(err)
                res.json({status: true, message: 'Order status updated successfully', data: order.insertWaybill_number})
        })
    }
}

// DELETE order_pickup list
exports.deleteOrder = (req,res) => {
    OrdersModel.deleteOrder(req.params.id, (err,) => {
        if(err)
        res.send(err)
        res.json({succes: true, message: 'Order has been deleted'})
    })

}
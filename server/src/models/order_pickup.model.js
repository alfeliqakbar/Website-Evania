var database = require('../../config/db.config')

var Orders = function(order){
    this.waybill_number = order.waybill_number
    this.sender_name = order.sender_name
    this.sender_phone = order.sender_phone
    this.sender_address = order.sender_address
    this.origin_city = order.origin_city
    this.origin_postcode = order.origin_postcode
    this.recipient_name = order.recipient_name
    this.recipient_phone = order.recipient_phone
    this.recipient_address = order.recipient_address
    this.destination_city = order.destination_city
    this.destination_postcode = order.destination_postcode
    this.item_name = order.item_name
    this.item_weight = order.item_weight
    this.status = order.status ? order.status : 1
    this.created_at = new Date()
    this.updated_at = new Date()
}

// GET all order
Orders.getAllOrder = (result) => {
    database.query('SELECT * FROM order_pickup', (err, res) => {
        if(err){
            console.log('error while fetching order_pickup', err)
            result(null,err)
        } else{
            // console.log('order_pickup fetched successfully')
            result(null,res)
        }
    })
}

// GET order by id
Orders.getOrderByWaybill = (waybill, result) => {
    database.query('SELECT * FROM order_pickup WHERE waybill_number=?', waybill, (err, res) => {
        if(err){
            console.log('Error while fetching by waybill', err)
            result(null, err)
        }else{
            result(null, res)
        }
    })
}



//POST new order
Orders.createOrder = (orderReqData, result) => {
    database.query('INSERT INTO order_pickup SET ? ', orderReqData, (err, res) => {
        if(err){
            console.log('Error while insert')
            result(null, {status: false, message: err})
        }else{
            console.log('Order has been created successfully')
            result(null, res)
        }
    })
}

// UPDATE order
Orders.updateOrder = (id, orderReqData, result) => {
    database.query("UPDATE order_pickup SET sender_name=?, sender_phone=?, sender_address=?, origin_city=?, origin_postcode=?, recipient_name=?, recipient_phone=?, recipient_address=?, destination_city=?, destination_postcode=?, item_name=?, item_weight=?, status=? WHERE id=?" , [orderReqData.sender_name, orderReqData.sender_phone, orderReqData.sender_address, orderReqData.origin_city, orderReqData.origin_postcode, orderReqData.recipient_name, orderReqData.recipient_phone, orderReqData.recipient_address, orderReqData.destination_city, orderReqData.destination_postcode, orderReqData.item_name, orderReqData.item_weight, orderReqData.status, id],
    (err, res) => {
        if(err){
            console.log('error while updating')
            result(null, err)
        }else{
            console.log('Order has been updated')
            result(null, res)
        }
    })
}

//UPDATE order status only
Orders.updateOrder = (id, orderReqData, result) => {
    database.query("UPDATE order_pickup SET status=? WHERE id=?", [orderReqData.status, id],
    (err, res) => {
        if(err){
            console.log('error while updating status')
            result(null, err)
        }else{
            console.log('order status updated')
            result(null, res)
        }
    })
}

//DELETE order
Orders.deleteOrder = (id, result) => {
    database.query('DELETE FROM order_pickup WHERE id=?', [id], (err, res) => {
        if(err){
            console.log('Error while deleting data')
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

module.exports = Orders
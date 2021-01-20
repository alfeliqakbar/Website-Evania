const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order_pickup.controller')
const { getOrderByWaybill } = require('../models/order_pickup.model')

// GET all order list
router.get('/', orderController.getOrderList)

// search order by waybill_number
router.get('/:waybill_number', orderController.getOrderByWaybill)

// POST new order
router.post('/', orderController.createNewOrder)

// UPDATE order
router.put('/:id', orderController.updateOrder)

//UPDATE order status only
router.put( '/:id', orderController.updateOrder)

// DELETE order
router.delete('/:id', orderController.deleteOrder)

module.exports = router
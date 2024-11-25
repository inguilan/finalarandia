const express = require('express');
const { addToOrder, checkoutOrder } = require('../controllers/orderController');

const router = express.Router();

// Rutas para gestionar pedidos
router.post('/add', addToOrder); // Sin middleware de autenticación
router.post('/checkout', checkoutOrder);

module.exports = router;

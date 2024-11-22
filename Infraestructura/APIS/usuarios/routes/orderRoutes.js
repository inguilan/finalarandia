const express = require('express');
const { addToOrder, checkoutOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/add', addToOrder); // Ruta para añadir productos
router.post('/checkout', checkoutOrder); // Ruta para finalizar compra

module.exports = router;

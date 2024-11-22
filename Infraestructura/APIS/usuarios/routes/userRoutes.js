const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser); // Ruta para registrar usuarios
router.post('/login', loginUser);       // Ruta para iniciar sesión

module.exports = router;

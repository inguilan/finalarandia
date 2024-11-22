const express = require('express');
const multer = require('multer');
const { createReview, getReviews } = require('../controllers/reviewController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configuración para manejar archivos

router.post('/create', upload.single('imagen'), createReview); // Ruta para crear reseñas
router.get('/', getReviews); // Ruta para obtener todas las reseñas

module.exports = router;

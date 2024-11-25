require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/recipe', recipeRoutes);
app.use('/reviews', reviewRoutes);
app.use('/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Cafe Arandia 2.0');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

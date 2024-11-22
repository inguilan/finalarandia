const prisma = require('../prismaClient');

exports.createReview = async (req, res) => {
  const { productId, calificacion, comentario, userId } = req.body;
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    // Validar datos requeridos
    if (!productId || !calificacion || !comentario || !userId) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
      return res.status(400).json({ error: 'La calificación debe estar entre 1 y 5' });
    }

    // Validar existencia de producto y usuario
    const product = await prisma.product.findUnique({ where: { id: parseInt(productId) } });
    const user = await prisma.user.findUnique({ where: { id: parseInt(userId) } });

    if (!product || !user) {
      return res.status(400).json({ error: 'Producto o usuario no válido' });
    }

    // Crear reseña
    const newReview = await prisma.review.create({
      data: {
        calificacion: parseInt(calificacion),
        comentario,
        imagen,
        userId: parseInt(userId),
        productId: parseInt(productId),
      },
    });

    res.status(201).json({ message: 'Reseña creada con éxito', review: newReview });
  } catch (error) {
    console.error('Error al crear reseña:', error);
    res.status(500).json({ error: 'Error al crear reseña', details: error.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      include: {
        product: true,
        user: true,
      },
    });

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error al obtener reseñas:', error);
    res.status(500).json({ error: 'Error al obtener reseñas', details: error.message });
  }
};

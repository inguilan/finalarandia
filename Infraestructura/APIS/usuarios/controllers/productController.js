const prisma = require('../prismaClient');

exports.addProduct = async (req, res) => {
  const { nombre, precio, descripcion, userId } = req.body;
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  if (!nombre || !precio || !userId) {
    return res.status(400).json({ error: 'El nombre, precio y ID de usuario son obligatorios.' });
  }

  try {
    const newProduct = await prisma.product.create({
      data: {
        nombre,
        precio: parseFloat(precio),
        descripcion,
        imagen,
        user: { connect: { id: parseInt(userId) } },
      },
    });
    res.status(201).json({ message: 'Producto agregado con éxito', product: newProduct });
  } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).json({ error: 'Error al agregar producto', details: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { user: true }, // Incluye la información del usuario relacionado
    });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos', details: error.message });
  }
};

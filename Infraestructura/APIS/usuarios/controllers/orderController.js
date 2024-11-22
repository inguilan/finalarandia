exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { user: true },
    });

    console.log('Productos encontrados:', products); // Depuración
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos', details: error.message });
  }
};

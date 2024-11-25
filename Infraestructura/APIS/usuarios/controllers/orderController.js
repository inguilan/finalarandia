const prisma = require('../prismaClient');

// Controlador para añadir productos al pedido
exports.addToOrder = async (req, res) => {
  try {
    res.status(200).json({ message: 'Producto añadido al pedido' });
  } catch (error) {
    console.error('Error en addToOrder:', error);
    res.status(500).json({ error: 'No se pudo añadir al pedido' });
  }
};

// Controlador para finalizar el pedido
exports.checkoutOrder = async (req, res) => {
  try {
    res.status(200).json({ message: 'Pedido finalizado con éxito' });
  } catch (error) {
    console.error('Error en checkoutOrder:', error);
    res.status(500).json({ error: 'No se pudo finalizar el pedido' });
  }
};

const prisma = require('../prismaClient');

exports.registerUser = async (req, res) => {
  const { nombre, email, contraseña } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { nombre, email, password: contraseña },
    });
    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario', details: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, contraseña } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && user.password === contraseña) {
      res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión', details: error.message });
  }
};

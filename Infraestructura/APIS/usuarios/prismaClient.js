// utils/prismaClient.js (asegúrate de que el archivo está en esta ubicación)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

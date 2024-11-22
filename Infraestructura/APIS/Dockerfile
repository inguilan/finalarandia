# Usa una imagen oficial de Node.js
FROM node:20

# Usa el usuario root
USER root

# Instala herramientas necesarias para PostgreSQL y otros utilitarios
RUN apt-get update && apt-get install -y wget nano postgresql postgresql-contrib && rm -rf /var/lib/apt/lists/*

# Crea directorios necesarios para PostgreSQL logs
RUN mkdir -p /var/log/postgresql && \
    chown -R postgres:postgres /var/log/postgresql

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/userAPI

# Copia los archivos de dependencias
COPY usuarios/package*.json ./

# Instala las dependencias locales
RUN npm install

# Copia el resto del código de la aplicación
COPY usuarios ./

# Genera los archivos cliente de Prisma
RUN npx prisma generate

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

// server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarioRoutes'));

// Conectar a la base de datos y levantar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos');
    return sequelize.sync();  // Sincroniza los modelos con la BD
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor en http://localhost:${PORT}`);
    });
  })
  .catch(error => console.error('Error al conectar a la BD:', error));

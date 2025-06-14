require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 👈 importar cors
const { sequelize } = require('./models');

const app = express();

// 👇 aplicar CORS (ajusta el origen según dónde corre tu frontend)
app.use(cors({
  origin: 'http://localhost:5173', // frontend (Vite)
  credentials: true                // si usas cookies o JWT en headers
}));

app.use(express.json());

// Rutas agrupadas bajo /api
app.use('/api', require('./routes/auth'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/cards', require('./routes/cards'));

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

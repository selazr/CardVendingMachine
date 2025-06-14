require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.use(express.json());

// Mount all API routes under a common `/api` prefix so the frontend can
// fetch endpoints like `/api/register` or `/api/cards` as documented in the
// project README.
app.use('/api', require('./routes/auth'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/cards', require('./routes/cards'));

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

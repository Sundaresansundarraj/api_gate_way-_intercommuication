const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());
app.use(userRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('User Service running on port 3001');
  });
});


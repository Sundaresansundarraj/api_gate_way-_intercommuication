const express = require('express');
const postRoutes = require('./routes/postRoutes');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());
app.use(postRoutes);

sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log('Post Service running on port 3002');
  });
});

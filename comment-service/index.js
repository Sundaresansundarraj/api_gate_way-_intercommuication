const express = require('express');
const commentRoutes = require('./routes/commentRoutes');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());
app.use(commentRoutes);

sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log('Comment Service running on port 3003');
  });
});


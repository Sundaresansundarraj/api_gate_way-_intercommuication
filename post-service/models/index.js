const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:sundar@localhost:3306/apiaxios');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull:true,
  },
});

module.exports = { Post, sequelize };


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:sundar@localhost:3306/apiaxios');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Profile = sequelize.define('Profile', {
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = { User, Profile, sequelize };


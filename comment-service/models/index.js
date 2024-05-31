const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:sundar@localhost:3306/apiaxios');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
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
Comment.belongsTo(Post)
Post.belongsTo(User)
User.hasOne(Profile)

module.exports = { Comment,Post,User,Profile, sequelize };


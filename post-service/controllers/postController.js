const { Post } = require('../models');
const axios = require('axios');

exports.createPost = async (req, res) => {
  try {
    const userResponse = await axios.get(`http://localhost:3000/user/users/${req.body.userId}`);
    if (!userResponse.data) return res.status(404).json({ error: 'User not found' });
    console.log(userResponse.data)
 


    const post = await Post.create(req.body);
    post.userId = userResponse.data
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    // const userResponse = await axios.get(`http://localhost:3001/users/${req.body.userId}`);
    // post.userId=userResponse.data
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



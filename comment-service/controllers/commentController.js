const { Comment,Post,User,Profile } = require('../models');
const axios = require('axios');


exports.createComment = async (req, res) => {
  try {
    const postResponse = await axios.get(`http://localhost:3002/posts/${req.body.postId}`);
    if (!postResponse.data) return res.status(404).json({ error: 'Post not found' });
   console.log(postResponse.data)
  //  const userResponse = await axios.get(`http://localhost:3001/users/3`);
  //  if (!userResponse.data) return res.status(404).json({ error: 'User not found' });
  //  console.log(userResponse.data)
    let comment = await Comment.create(req.body);
    comment.postId = postResponse.data
    // comment.postId.userId = userResponse.data
    res.status(201).json(comment);
  } catch (error) {
    console.log("ddd",error.message)
    res.status(400).json({ error: error.message });
  }
};

exports.getComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
   const createdComment = await Comment.findOne({
     where: { id: comment.id },
     include: [{
       model: Post,
       include: [{
         model: User,
         include: [Profile]
       }]
     }]
   });
   const response = {
     id: createdComment.id,
     content: createdComment.content,
     postId: {
       id: createdComment.Post.id,
       title: createdComment.Post.title,
       content: createdComment.Post.content,
       userId: {
         id: createdComment.Post.User.id,
         name: createdComment.Post.User.name,
         Profile: createdComment.Post.User.Profile
       },
     },
   };

   res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





const express = require('express');
const { createPost, getPost } = require('../controllers/postController');
const router = express.Router();

router.post('/posts', createPost);
router.get('/posts/:id', getPost);

module.exports = router;

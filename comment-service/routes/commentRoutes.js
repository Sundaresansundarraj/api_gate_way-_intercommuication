const express = require('express');
const { createComment, getComment } = require('../controllers/commentController');
const router = express.Router();

router.post('/comments', createComment);
router.get('/comments/:id', getComment);

module.exports = router;




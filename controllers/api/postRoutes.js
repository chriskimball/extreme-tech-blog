const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

//TODO:
// POST - "/api/posts" - Create New Post View
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//TODO:
// PUT - "/api/posts/:postId" - Edit Post API 

//TODO:
// DELETE - "/api/posts/:postId" - Delete Post API


module.exports = router;
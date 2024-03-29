const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET - "/" - home
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - "/login" - login form
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET - "/signup" - Registration Form
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

// GET - "/dashboard" - user dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - "/dashboard/new" - Create Post view
router.get('/dashboard/new', withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
  res.render('create-post');
});

// GET - "/post/:postId" - View single post
router.get('/post/:id', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('post', {
      post,
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET - "/dashboard/edit/:postId" - Edit Post
router.get('/dashboard/edit/:id', withAuth, async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findByPk(req.params.id);

    // Serialize data so the template can read it
    const post = postData.get({ plain: true });
    // Pass serialized data and session flag into template
    res.render('edit-post', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

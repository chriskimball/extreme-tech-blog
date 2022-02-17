const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET - "/" - home
// home.handlebars
router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    try {
      // Get all projects and JOIN with user data
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
  } else {
    res.render('home');
  }
});

// GET - "/login" - login form
// login.handlebars
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET - "/signup" - Registration Form
// register.handlebars
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

//TODO:
// GET - "/dashboard" - user dashboard
// dashboard.handlebars
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

//TODO:
// GET - "/dashboard/new" - Create Post view
// create-post.handlebars
router.get('/dashboard/new', withAuth, (req, res) => {
  // If the user is already logged in, redirect the request to another route
    res.render('create-post');
});

//TODO:
// GET - "/post/:postId" - View single post
// post.handlebars

//TODO:
// GET - "/dashboard/edit/:postId" - Edit Post
// edit-post.handlebars

module.exports = router;

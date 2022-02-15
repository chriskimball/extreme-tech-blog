/* ACTIVITY 10
// const router = require('express').Router();
// const Dish = require('../models/Dish');

// // route to get all dishes
// router.get('/', async (req, res) => {
//     const dishData = await Dish.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const dishes = dishData.map((dish) => dish.get({ plain: true }));
//         res.render('all', { dishes });
//       });
  
//   // route to get one dish
//   router.get('/dish/:id', async (req, res) => {
//     try{ 
//         const dishData = await Dish.findByPk(req.params.id);
//         if(!dishData) {
//             res.status(404).json({message: 'No dish with this id!'});
//             return;
//         }
//         const dish = dishData.get({ plain: true });
//         res.render('dish', dish);
//       } catch (err) {
//           res.status(500).json(err);
//       };     
//   });

// module.exports = router;
*/

// TODO:
// GET - "/" - home
// home.handlebars

//TODO:
// GET - "/login" - login form
// login.handlebars

//TODO:
// GET - "/signup" - Registration Form
// register.handlebars

//TODO:
// GET - "/dashboard" - user dashboard
// dashboard.handlebars

//TODO:
// GET - "/dashboard/new" - Create Post view
// create-post.handlebars

//TODO:
// GET - "/post/:postId" - View single post
// post.handlebars

//TODO:
// GET - "/dashboard/edit/:postId" - Edit Post
// edit-post.handlebars
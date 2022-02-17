const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Post belongs to User (Post.user_id)
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Post have many Comments
Post.hasMany(Comment, {
  foreingKey: 'post_id',
  onDelete: 'CASCADE',
});

// Comment belongTo Post (Comment.post_id)
Comment.belongsTo(Post, {
  foreingKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };

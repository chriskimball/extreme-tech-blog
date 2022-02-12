const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many Posts
User.hasMany(Post);

// Post belongs to User (Post.user_id)
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// User has many Comments
User.hasMany(Comment)

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'Cascade'
})

// Post have many Comments
Post.hasMany(Comment)

// Comment belongTo Post (Comment.post_id)
Comment.belongsTo(Post, {
  foreingKey: 'post_id',
  onDelete: 'cascade'
})

module.exports = { User, Post };

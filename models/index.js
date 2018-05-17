const db = require('./_db');
const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'authorId',
});


Post.belongsTo(User, {
    foreignKey: 'authorId',
});


module.exports = { db, User, Post };

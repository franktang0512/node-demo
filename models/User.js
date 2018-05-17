const Sequelize = require('sequelize');
const db = require('./_db');


const User = db.define('User', {
    email: {
        type: Sequelize.STRING(100),
        /*unique: true*/
    },
    password: {
        type: Sequelize.STRING
    },
    nickname: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.INTEGER
    }
});


module.exports = User;

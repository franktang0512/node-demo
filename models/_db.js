const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions:{
        ssl:true,
    },
    pool:{
        min: 0,
        max:5,
        acquire:30000,
        idle: 10000,
    }
});

module.exports = db;
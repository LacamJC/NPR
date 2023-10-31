const Sequelize = require ('sequelize');
const sequelize = new Sequelize('bdNpr', 'ramajo', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize

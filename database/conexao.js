const Sequelize = require ('sequelize');
const sequelize = new Sequelize('railway', 'root', 'ehG3GDGEEf2B1G56dF34gg-F6H-d4hB1', {
    dialect: 'mysql',
    host: 'viaduct.proxy.rlwy.net',
    port: 15098
})

module.exports = sequelize

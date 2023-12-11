const Sequelize = require ('sequelize');
const sequelize = new Sequelize('railway', 'root', 'F6a-DcG1gF6F61bHhA4bfcBE-D6c-dbg', {
    dialect: 'mysql',
    host: 'roundhouse.proxy.rlwy.net',
    port: 23669
})

module.exports = sequelize

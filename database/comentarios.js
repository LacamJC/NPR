const Sequelize = require('sequelize')
const database = require('./conexao')

const comentarios = database.define('comentarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    comentario: {
        type: Sequelize.TEXT
    }
})

comentarios.sync({force: true})

module.exports = comentarios
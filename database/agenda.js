const Sequelize = require('sequelize')
const database = require('./conexao')

const agenda = database.define('agenda', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    endereco: {
        type: Sequelize.TEXT
    },

    dia: {
        type: Sequelize.TEXT
    },

    tipo: {
        type: Sequelize.TEXT
    }
})

agenda.sync({force: true})

module.exports = agenda
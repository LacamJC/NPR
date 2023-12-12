 const Sequelize = require('sequelize')
 const database = require('./conexao')

 // PRODUTOS.JS é a pagina de criação da tabela dos clientes mas mantera o nome produto.js
const usuario = database.define('usuarios', {
    cod_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    cpf_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email_usuario:{
        type: Sequelize.STRING,
        allowNull: false, 
    },

    tel_usuario: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    cep_usuario: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    senha_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    foto_usuario: 
    {
        type: Sequelize.STRING,
        allownull: true,
    },

    nivel_usuario: {
        type: Sequelize.INTEGER, 
        allowNull: true,
    }

})


    
// usuario.sync({force: true})

 module.exports = usuario

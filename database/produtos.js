 const Sequelize = require('sequelize')
 const database = require('./conexao')

 // PRODUTOS.JS é a pagina de criação da tabela dos clientes mas mantera o nome produto.js


// const Produto = database.define('produtos', {
//     id_prod: {
//         type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey:true 
//     },

//     descricao_prod:{
//         type: Sequelize.STRING(60),
//         unique: true,
//         allowNull: false
//     },

//     valor_unitario: {
//         type:Sequelize.DECIMAL(6,2),
//         allowNull: false
//     },
//     qtde_estoque:{
//         type:Sequelize.INTEGER,
//         allowNull:false
//     },

//     imagem_produto: {
//              type: Sequelize.STRING(50),
//          allowNull: false
//      }
// })


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

    // comple_end_usuario: {
    //     type: Sequelize.STRING,
    //     allowNull: true,
    // },

    // num_end_usuario: {
    //     type: Sequelize.STRING,
    //     allowNull: false, 
    // },

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

    // status_usuario: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true,
    // }

    // doc_usuario: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },


})


    
// usuario.sync({force: true})

 module.exports = usuario

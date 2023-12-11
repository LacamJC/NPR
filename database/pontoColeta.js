const Sequelize = require('sequelize')
const sequelize = require('./conexao')
const database = require('./conexao')

const pontoColeta = database.define('tbPontoColeta', {
    cod_ponto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    end_nome_ponto: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    ,
    end_email_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    end_ponto_referencia: {
        type: Sequelize.STRING,
        allowNull: false,    
    },

    tipo_coleta: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      
    end_cep_coleta:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    end_rua_coleta:{ // Vai pegar a rua do ponto de coleta
        type: Sequelize.STRING,
        allowNull: false,
    },

    end_num_coleta:{ // Caso necessario pega o numero do local do ponto de coleta
        type:Sequelize.STRING,
        allowNull: true,
    },

    end_bairro_coleta:{ // Vai pegar o bairro do ponto de coleta
        type:Sequelize.STRING,
        allowNull: false,
    },

    end_cidade_coleta:{ // Vai pegar a cidade do ponto de coleta
        type:Sequelize.STRING,
        allowNull: false,
    },

    end_imagem_coleta:{
        type: Sequelize.STRING,
        allowNull: true,
    },

    end_descricao_coleta:{
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    
})



pontoColeta.sync({force: true})

module.exports = pontoColeta

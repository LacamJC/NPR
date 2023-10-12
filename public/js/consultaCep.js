// meuArquivo.js

const axios = require('axios');

function processarCEP(cep) {
  axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      const data = response.data;

      // Faça o que desejar com os dados da API
      // Por exemplo, você pode armazenar os dados em seu banco de dados MySQL
      // ou retorná-los como resposta para o cliente
      console.log(data);
      // res.json(data.bairro); // Retorna os dados do CEP como resposta

      var valEndBairro = data.bairro;
      var valEndRua = data.logradouro;
      var valEndCidade = data.localidade;
      var valEndNum =  req.body.enderecoNumPontocoleta;

      if (data == null || data == undefined || data.length < 1) {
        console.log("_____________")
        console.log("CEP INVÁLIDO")
        console.log("_____________")
      }

      pontoColeta
        .create({
          // end_coleta : req.body.enderecoPontocoleta,
          end_email_usuario: req.body.endEmailUsuario,
          end_cep_coleta: req.body.enderecoCepPontocoleta,
          end_rua_coleta: valEndRua,
          end_num_coleta: valEndNum,
          end_bairro_coleta: valEndBairro, // Usando o valor do bairro retornado pela API
          end_cidade_coleta: valEndCidade,
          end_imagem_coleta: req.body.enderecoImagemPontocoleta,
          nome_ponto_coleta: req.body.enderecoNomePontocoleta,
        })
        .then(function() {
          res.render('../views/npr/status.ejs');
        })
        .catch(function(erro) {
          res.send('Houve um erro: ' + erro);
        });
    })
    .catch(error => {
      console.error(error);
      console.log("______________")
      console.log("CEP INVÁLIDO")
      console.log("______________")
      msg.push("CEP inválido")
      console.log(msg)
      res.render("../views/npr/cadastro_pontocoleta.ejs", {msg : msg})
    });
}

module.exports = { processarCEP };

/*
    npm config set strict-ssl false // Caso computador da fieb

    npm install express

    npm install axios

    npm install ejs

    npm install sequelize

    npm install mysql2
*/


/* criar o objeto/mpdulo express */
var express  = require("express")

/* executar o objeto express */
var aplicacao = express()

/* Modulo axios */
const axios = require('axios')

/* Fazer o include do modulo router */
const rotas = require("./routes/router")

/* criar o objeto bodyParser para ler os dados do formulario*/
const bodyParser = require('body-parser')
const usuario = require("./database/produtos.js")
const pontoColeta = require("./database/pontoColeta.js")
const agenda = require('./database/agenda.js')
/*
express.json() analisa os dados do formulario que  ficam no corpo de solicitação (POST),
também chamado de request de entrada, para ser enviado ao servidor web
 */
aplicacao.use(express.json())

/* utiliza o objeto rotas que define os caminhos das páginas*/
aplicacao.use('/', rotas)

/* bodyParser serve para trabalhar com os dados vindo do formulario, ou seja, ele transforma
e formata esse pacote de dados para o formato de objeto Javacript
 */
aplicacao.use(bodyParser.urlencoded({extended:false}))

/* include (utilizar) um arquivo externo */
aplicacao.use(express.static(__dirname +'/public'))

/* desmontrar que será utilizado o objeto ejs para interpretarvo template HTML no servidor web */
aplicacao.set('view engine', 'ejs')

aplicacao.post('/add_usuario', function(req,res){

    let cadSenha = req.body.senhaUsuario
    let cadConfirmaSenha = req.body.senhaConfirmaUsuario
    let valNome = req.body.nomeUsuario
    let valEmail = req.body.emailUsuario 
    let valTel = req.body.telUsuario
    let valCpf = req.body.cpfUsuario 
    let valCep = req.body.cepUsuario 
    var msg = ""
    console.log("#########")
    console.warn("Adicionando novo usuario processo em andamento")
    console.log(`Nome           : ${valNome} `)
    console.log(`Email          : ${valEmail}`)
    console.log(`Telegone       : ${valTel} `)
    console.log(`CPF            : ${valCpf} `)
    console.log(`Senha          : ${cadSenha}`)
    console.log(`Confirma senha : ${cadConfirmaSenha} `)
    console.log("#########")

    
    if(cadSenha != cadConfirmaSenha)
    {
        msg = "Senhas diferentes, por favor coloque novamente"
        valNome = valNome
        valEmail = valEmail 
        valCpf = valCpf 
        valCep = valCep
        res.render('../views/npr/cadastro_att.ejs', {valTel:valTel, msg : msg, valNome : valNome, valEmail : valEmail, valCpf : valCpf, valCep : valCep})
    }
    else {
        usuario.create ({
            nome_usuario : req.body.nomeUsuario,
            email_usuario : req.body.emailUsuario,
            tel_usuario : req.body.telUsuario,
            cpf_usuario : req.body.cpfUsuario,
            cep_usuario : req.body.cepUsuario,
            // comple_end_usuario : req.body.compleEndUsuario,
            // num_end_usuario : req.body.numEndUsuario, 
            senha_usuario : req.body.senhaUsuario,
            // confirma_senha_usuario : req.body.usuarioConfirmaSenha,
            foto_usuario : req.body.fotoPerfil,
            nivel_usuario : "0",
    
        }).then(function(){  
    
            //Se tudo estiver certo
            res.render('../views/npr/homecelular.ejs')
        }).catch(function(erro){
            res.send("Houve um " + erro)
            
       })
    }
   
})


/*FUNCIONAL DA CONSULTA DE CEP  GPT CODE*/
aplicacao.post('/add_ponto_coleta', function(req, res) {
    
    var ponto_cep = req.body.enderecoCepPontocoleta;
    const cep = ponto_cep.replace('-', '');
    var msg = [];
    var tipoEletronico = req.body.lixoEletronico;
    var tipoOrganico = req.body.lixoOrganico;
    var tipoOleo = req.body.lixoOleo;
    var tipoReciclavel = req.body.lixoReciclavel;
    var tipoPonto = []
    var msg_email = ""
    var criar = 0;
    if(tipoEletronico != undefined)
    {
        tipoPonto.push("Eletronico")
        
    }

    if(tipoOrganico != undefined)
    {
        tipoPonto.push("Organico")
    }

    if(tipoOleo != undefined)
    {
        tipoPonto.push("Oléo")
    }

    if(tipoReciclavel != undefined)
    {
        tipoPonto.push("Reciclavel")
    }

    // Verificação de usuario e senha para confirmação de cadastro

    let logusuario = req.body.endEmailUsuario
    let senha = req.body.endSenhaUsuario

    usuario.findOne({ where : {email_usuario : logusuario, senha_usuario : senha}}).then(tabelaUsuario => {
        if (tabelaUsuario != null ) // Se usuario e senha estiver correto
        {
            console.log("################################")
            console.log("################################")
            console.log("################################")
            console.log("Usuario encontrado no banco de dados")
            console.log("Email: "+ tabelaUsuario.email_usuario)
            console.log("Senha : "+ tabelaUsuario.senha_usuario)
            console.log("################################")
            console.log("################################")
            console.log("################################")


            ///

            console.log("Tipo de coleta : "+tipoPonto)
  
            // Faça uma chamada à API de análise de CEP
            axios
              .get(`https://viacep.com.br/ws/` + cep + `/json/`)
              .then(response => {
                const data = response.data;
          
                if (data.erro) {
                  console.log("_____________");
                  console.log("CEP INVÁLIDO");
                  console.log("_____________");
                  msg.push("CEP inválido");
                  console.log(cep)
                  console.log(msg);
                  return res.render("../views/npr/cadastro_pontocoleta.ejs", { msg: msg, msg_email : msg_email });
                }
          
                // Faça o que desejar com os dados da API
                // Por exemplo, você pode armazenar os dados em seu banco de dados MySQL
                // ou retorná-los como resposta para o cliente
                console.log(data);
                // res.json(data.bairro); // Retorna os dados do CEP como resposta
          
                var valEndBairro = data.bairro;
                var valEndRua = data.logradouro;
                var valEndCidade = data.localidade;
                var valEndNum = req.body.enderecoNumPontocoleta;
          
                pontoColeta
                  .create({
                    // end_coleta : req.body.enderecoPontocoleta,
                    end_nome_ponto : req.body.nomePontocoleta,
                    end_email_usuario: req.body.endEmailUsuario,
                    end_cep_coleta: req.body.enderecoCepPontocoleta,
                    end_rua_coleta: valEndRua,
                    end_num_coleta: valEndNum,
                    end_bairro_coleta: valEndBairro, // Usando o valor do bairro retornado pela API
                    end_cidade_coleta: valEndCidade,
                    end_imagem_coleta: req.body.enderecoImagemPontocoleta,
                    // nome_ponto_coleta: req.body.enderecoNomePontocoleta,
                    end_ponto_referencia: req.body.enderecoPontoReferencia,
                    end_descricao_coleta : req.body.enderecoPontoDescricao,
                    tipo_coleta : tipoPonto,
                  })
                  .then(function() {
                    res.render('../views/npr/homecelular.ejs');
                  })
                  .catch(function(erro) {
                    res.send('Houve um erro: ' + erro);
                  });
              })
              .catch(error => {
                console.error(error);
                console.log("______________");
                console.log("ERRO AO CONSULTAR CEP");
                console.log(cep)
                console.log("______________");
                msg.push("Erro ao consultar CEP");
                console.log(msg);
                res.render("../views/npr/cadastro_pontocoleta.ejs", { msg: msg, msg_email });
              });
        } 


        else  // Se usuario e senha estiver incorreto
        {
            console.log("################################")
            console.log("################################")
            console.log("################################")
            console.log("Usuario nao encontrado no banco de dados")
            console.log("################################")
            console.log("################################")
            console.log("################################")
            msg.push("Email ou senha incorretos")
            criar = 1
            res.render('../views/npr/cadastro_pontocoleta.ejs', {msg_email : msg_email, msg : msg})
        }
    })

  });
  
///


aplicacao.post('/verificaLogin', function(req,res){
    var usuariologin = req.body.emaillogin
    var senha = req.body.senhalogin

    var erros = []

    // Verificação dos campos de login 
    if(usuariologin.length < 1 || usuariologin == undefined || usuariologin == null)
    {
        erros.push("Usuario inválido")
    }

    if(senha.length < 1 || senha == undefined || senha == null)
    {
        erros.push("Senha inválida")    
    }

    if (senha.length < 6)
    {
        erros.push("A senha deve ter 6 digitos")    
    }

    if(erros.length > 0)
    {
        res.render("../views/npr/logincelular.ejs", {erros : erros, usuariologin : usuariologin})
    }


    // Validação do banco de dados
    let usuariolog = req.body.emaillogin 
    let senhalog = req.body.senhalogin
 



    usuario.findOne({ where : {email_usuario : usuariolog, senha_usuario : senhalog}}).then(tabelaUsuario => {
        if (tabelaUsuario != null) // Caso o usuario seja encontrado no banco de dados
        {
            console.log("################################")
            console.log("################################")
            console.log("################################")
            console.log("Usuario encontrado no banco de dados")
            console.log("Email: "+ tabelaUsuario.email_usuario)
            console.log("Senha : "+ tabelaUsuario.senha_usuario)
            console.log("Imagem : "+ tabelaUsuario.foto_usuario)
            if(tabelaUsuario.nivel_usuario == 1)
            {
                usuarioTipo = "Administrador";
            } else { usuarioTipo = "Comum"}
            console.log("Tipo : "+ usuarioTipo)
            console.log("################################")
            console.log("################################")
            console.log("################################")
            
            if (tabelaUsuario.email_usuario === usuariolog && tabelaUsuario.senha_usuario === senhalog) // Se estiver correto ira para a página de perfil
            {
                let nomeUsuario = tabelaUsuario.nome_usuario // Puxa o nome do usuario cadastrado no banco
                let fotoUsuario = tabelaUsuario.foto_usuario // Puxa a foto do usuario cadastrado no banco
                let cpfUsuario = tabelaUsuario.cpf_usuario // Puxa o CPF do usuario cadastrado no bancoS
                let emailUsuario = tabelaUsuario.email_usuario // Puxa o EMAIL do usuario cadastrado no banco
                let cepUsuario = tabelaUsuario.cep_usuario // Puxa o CEP do usuario cadastrado no banco
                let telUsuario = tabelaUsuario.tel_usuario // Puxa o TELEFONE do usuario cadastrado no banco
                if(tabelaUsuario.nivel_usuario == 1)
                {
                    usuarioTipo = "Administrador";
                } else { usuarioTipo = "Comum"}
                let tipoUsuario = usuarioTipo // Puxa o TIPO do usuario cadastrado no banco 
                 var nivelUsuario = tabelaUsuario.nivel_usuario;
                if (fotoUsuario == null || fotoUsuario == "")
                {
                    fotoUsuario = "perfil_default.png"
                }
                res.render("../views/npr/perfil.ejs", {nomeUsuario : nomeUsuario, fotoUsuario : fotoUsuario, cpfUsuario : cpfUsuario, emailUsuario : emailUsuario, cepUsuario : cepUsuario, telUsuario : telUsuario, tipoUsuario : tipoUsuario, nivelUsuario : nivelUsuario   })
            }
            else { // Se estiver fora do banco de dados sera enviado um erro 
                erros.push("Sem permissao. Usuario ou senha nao cadastrado")
                res.render("../views/npr/logincelular.ejs", { erros: erros, usuariologin: usuariologin });

            }
        }
        else { // Se estiver fora do banco de dados sera enviado um erro 
            erros.push("Sem permissao. Usuario/senha Incorretos")
            res.render("../views/npr/logincelular.ejs", { erros: erros, usuariologin: usuariologin });

        }
    })

})

//res.render('sucesso.ejs')


aplicacao.get('/listaPontos', function(req, res) {
    console.log("#######################");
    console.log("ENVIANDO PONTO DE COLETA PARA A TABELA");

    pontoColeta.findAll({
        attributes: ['end_rua_coleta', 'end_num_coleta', 'end_bairro_coleta', 'end_cidade_coleta', 'end_imagem_coleta', 'end_ponto_referencia', 'tipo_coleta', 'end_nome_ponto', 'end_descricao_coleta'] // qual coluna será puxada 
    }).then(pontoColeta => {
        const valoresEndRuaColeta = pontoColeta.map(ponto => ponto.end_rua_coleta);
        const valoresEndNumColeta = pontoColeta.map(ponto => ponto.end_num_coleta);
        const valoresEndBairroColeta = pontoColeta.map(ponto => ponto.end_bairro_coleta);
        const valoresEndCidadeColeta = pontoColeta.map(ponto => ponto.end_cidade_coleta);
        const valoresEndFotoColeta = pontoColeta.map(ponto => ponto.end_imagem_coleta);
        const valoresPontoReferencia = pontoColeta.map(ponto => ponto.end_ponto_referencia);
        const valoresTipoPontoColeta = pontoColeta.map(ponto => ponto.tipo_coleta);
        const valoresNomePontoColeta = pontoColeta.map(ponto => ponto.end_nome_ponto)
        const valoresDescPontColeta = pontoColeta.map(ponto => ponto.end_descricao_coleta)
        console.log(pontoColeta.length)
        if(valoresEndRuaColeta != null)
        {
            console.log(`Nome : ${valoresNomePontoColeta}`)
            console.log("RUA : "+valoresEndRuaColeta)
            console.log("NUM : "+valoresEndNumColeta)
            console.log("BAIRRO : "+valoresEndBairroColeta)
            console.log("CIDADE : "+valoresEndCidadeColeta)
            console.log("TIPO: "+valoresTipoPontoColeta)
            console.log("PONTO DE REFERENCIA: "+valoresPontoReferencia)
            console.log("IMAGEM : "+valoresEndFotoColeta)     
            console.log(`Descrição : ${valoresDescPontColeta}`)       
            res.render('../views/npr/lista_pontos.ejs', {nomeLista : valoresPontoReferencia,ruaLista : valoresEndRuaColeta, numLista : valoresEndNumColeta, bairroLista : valoresEndBairroColeta, cidadeLista : valoresEndCidadeColeta, pontoColeta : pontoColeta, imagemLista : valoresEndFotoColeta, tipoLista : valoresTipoPontoColeta, nomeLista : valoresNomePontoColeta, descricaoLista : valoresDescPontColeta})
        } else {
            console.log("Não encontro a rua")
        }

    });
});



    aplicacao.get('/admListaUsuarios', async (req, res) => {
        try {
            const todosUsuarios = await usuario.findAll(); // Consulta todos os usuários no banco de dados
            res.render('../views/npr/adm/lista_usuarios.ejs', { todosUsuarios }); // Renderize uma visualização com a lista de usuários
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao buscar usuários');
        }
    });

    aplicacao.get('/admListaPontos', async (req,res) => {
        try {
            const todosPontos = await pontoColeta.findAll(); // Consulta todos os pontos de coleta no banco de dados
            console.log("Pontos encontrados")
            console.log(todosPontos.cod_ponto)
            res.render('../views/npr/adm/lista_pontos.ejs', {todosPontos })
        } catch (error) {
            console.log(error);
            res.status(500).send('Erro ao buscar pontos de coleta')
        }
    })

    
    aplicacao.post("/deletarUsuario", async (req, res) => {
        try {
          const codigoUsuario = req.body.codUsuario;
        // Aqui você deve implementar a lógica para excluir o usuário do banco de dados
          // Consulte o ORM Sequelize para excluir o usuário com base no código do usuário.
      
          await usuario.destroy({
            where: {
              cod_usuario: codigoUsuario,
            },
          });
          const todosUsuarios = await usuario.findAll(); //atualiza todos os usuários no banco de dados
  
          res.render('../views/npr/adm/lista_usuarios.ejs', { todosUsuarios }); // Renderize uma visualização com a lista de usuários
        } catch (error) {
          console.error(error);
          res.status(500).send("Erro ao excluir usuário");
        }
      });

      aplicacao.post("/deletarPonto", async(req,res) => {
        try{
            const delCodigoPonto = req.body.codPonto;

            await pontoColeta.destroy({
                where: {
                    cod_ponto : delCodigoPonto,
                },
            }); // Deletar ponto cadastrado com o codigo 
            const todosPontos = await pontoColeta.findAll(); // Consulta todos os pontos de coleta no banco de dados
            res.render('../views/npr/adm/lista_pontos.ejs', { todosPontos : todosPontos});
        } catch(error) {
            console.error(error);
            res.status(500).send("Erro ao excluir ponto");
        }
      });

      aplicacao.post('/agendaColeta', function(req,res) {
        console.log('CADASTRANDO AGENDAMENTO DE COLETA')
        
        let Data = req.body.data;
        let Cep = req.body.cep;
        let Oleo = req.body.oleo;
        let Reciclavel  = req.body.reciclavel
        let Organico  = req.body.organico
        let Eletronico = req.body.eletronico

        var data = "";
        var endereco = "";
        var tipo = [];
        
        Oleo == "on" ? tipo.push("oleo") : false; 
        Reciclavel == "on" ? tipo.push("reciclavel") : false;
        Organico == "on" ? tipo.push("organico") : false;
        Eletronico == "on" ? tipo.push("eletronico") : false;
        
        
        
 
        console.log(Data,Cep, tipo)

        res.render("../views/npr/adm/cadastro_agenda.ejs")
      })

    
    aplicacao.get('/alterarInfo', function(req,res) {
        console.log("ALTERACAO DE INFORMAÇÔES NO BANCO DE DADOS")
        
    })

/* servidor web fica na escuta da solicitação do cliente (computador q possui navegador) na  porta 3000 */
    // aplicacao.listen(3001, function(req, res) {
    //     console.log("########################");
    //     console.log("");
    //     console.log("Servidor Aberto");
    //     console.log("");   
    //     console.log("");
    //     console.log("########################");
    // })

//Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;

// Listen on `port` and 0.0.0.0
aplicacao.listen(port, "0.0.0.0", function () {
  console.log("SERVER OPEN")
});



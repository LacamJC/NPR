const express = require("express")
const  router = express.Router()
const usuario = require('../database/produtos')

/* defenido a rota (caminho) da home page */
// /* definido a rota (caminho) da página calculo */
// router.get('/calculo', function (req, res) {
//     res.render('../views/calculo.ejs')
// })

// router.get('/cadastro', function(req,res) {
//     res.render('../views/cadastro_produtos.ejs')
// })


//Leva para a pagina home
router.get('/', function (req, res) {
    res.render('../views/npr/homecelular.ejs')
})


//Leva para a página de cadastro

var msg =""
var valNome = ""
var valEmail = ""
var valCpf = ""
var valCep = ""
var valTel = ""
router.get('/cadastro', function(req,res) {
    res.render('../views/npr/cadastro_att.ejs', {valTel:valTel,msg : msg, valNome : valNome, valEmail : valEmail, valCpf : valCpf, valCep : valCep})
})

//Leva para a página status
router.get('/status', function(req,res) {
    res.render('../views/npr/status.ejs')
})

//Leva para a página de login

var erros = []
var usuariologin = ""

router.get('/login', function(req,res) {
    res.render('../views/npr/logincelular.ejs', {erros : erros, usuariologin : usuariologin})
})

//Leva para a página de cadastro dos pontos de coleta

var msg = []
var msg_email = ""
router.get('/ponto_cadastro', function(req,res) {
    res.render('../views/npr/cadastro_pontocoleta.ejs', {msg : msg, msg_email : msg_email})
})

// Puxando nome do usuario

var nomeUsuario = ""
var fotoUsuario = ""
var nivelUsuario = ""
router.get('/perfil', function(req,res) {
    res.render('../views/npr/perfil.ejs', {nomeUsuario : nomeUsuario, fotoUsuario : fotoUsuario, nivelUsuario : nivelUsuario})
})

//Leva para a lista de pontos de coleta cadastrados

var pontoColeta = ""
var tbpontocoleta  = ""

var ruaLista = ""
var numLista = ""
var bairroLista = ""
var cidadeLista = ""
var pontoColeta = ""
var imagemLista = ""
var nomeLista = ""
var descricaoLista = ""
router.get('listaPontos', function(req,res)  {
    res.render('../views/npr/lista_pontos.ejs', {nomeLista : nomeLista,imagemLista : imagemLista,ruaLista : ruaLista, numLista : numLista, bairroLista : bairroLista, cidadeLista, pontoColeta : pontoColeta, descricaoLista : descricaoLista })
})

//Leva para area de adminsitrador para ver a lista de usuarios cadastrados
// router.get('/', function(req,res) {
//     res.render('../views/npr/adm/lista_usuarios.ejs')
// })

router.get("/admAgenda", function(req,res) {
    res.render('../views/npr/adm/cadastro_agenda.ejs')
})

router.get('/alterarNome', function(req,res) {
    res.render('../views/npr/adm/alterar/nome.ejs')
})
router.get('/alterarEmail', function(req,res) {
    res.render('../views/npr/adm/alterar/email.ejs')
})

router.get('/alterarSenha', function(req,res) {
    res.render('../views/npr/adm/alterar/senha.ejs')
})


module.exports = router
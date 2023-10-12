var nome_fantasia = "NPR Natureza Prioridade Máxima";
var endereco = "Rua Interna Grupo Bandeirante, 138 - Jardim Belval, Barueri - SP, 06420-150";
var tel = "(xx) xxxxx-xxxx";
var email = "naturezaprioridaderenovada@gmail.com";


function buscar()
{
    var caixa_nome_fantasia = document.getElementById("nome_fantasia");

    document.getElementById("fake_nome_fantasia").innerHTML = nome_fantasia;
    document.getElementById("fake_endereco").innerHTML = endereco;
    document.getElementById("fake_telefone").innerHTML = tel;
    document.getElementById("fake_email").innerHTML = email;
}
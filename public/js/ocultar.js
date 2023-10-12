
function selecionado(num)
{
    if (num == 0)
    {
        document.getElementById("form_cadastro_usuario").classList.add("mostrar");
        document.getElementById("form_cadastro_usuario").classList.remove("ocultar");

        document.getElementById("form_empresa").classList.add("ocultar");
        document.getElementById("form_empresa").classList.remove("mostrar");

        document.getElementById("form_cadastro_funcionario").classList.add("ocultar");
        document.getElementById("form_cadastro_funcionario").classList.remove("mostrar");
    }
    if(num == 1)
    {
        document.getElementById("form_empresa").classList.add("mostrar");
        document.getElementById("form_empresa").classList.remove("ocultar");

        document.getElementById("form_cadastro_usuario").classList.remove("mostrar");
        document.getElementById("form_cadastro_usuario").classList.add("ocultar");

        
        document.getElementById("form_cadastro_funcionario").classList.remove("mostrar");
        document.getElementById("form_cadastro_funcionario").classList.add("ocultar");
    } if(num == 2)
    {
        document.getElementById("form_cadastro_funcionario").classList.add("mostrar");
        document.getElementById("form_cadastro_funcionario").classList.remove("ocultar");

        document.getElementById("form_empresa").classList.remove("mostrar");
        document.getElementById("form_empresa").classList.add("ocultar");

        document.getElementById("form_cadastro_usuario").classList.remove("mostrar");
        document.getElementById("form_cadastro_usuario").classList.add("ocultar");
    } 
}
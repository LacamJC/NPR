const campoTEL = document.getElementById('id_tel');

campoTEL.addEventListener('keypress', () =>
{
    let pos_caractereTEL = campoTEL.value.length;

    if(pos_caractereTEL == 0 )
    {
        campoTEL.value += '('
    }

    else if(pos_caractereTEL == 3)
    {
        campoTEL.value += ')'
    }

    else if(pos_caractereTEL == 9)
    {
        campoTEL.value += '-'
    }
})

const campoCPF = document.getElementById('id_cpf');


campoCPF.addEventListener('keypress', () =>
{
    let pos_caractereCPF = campoCPF.value.length;
    
    if(pos_caractereCPF == 3 || pos_caractereCPF == 7 )
    {
        campoCPF.value += '.'
    }

    else if(pos_caractereCPF == 11)
    {
        campoCPF.value += '-'
    }
})


const campoCEP = document.getElementById('id_cep');

campoCEP.addEventListener('keypress', () =>
{
    let pos_caractereCEP = campoCEP.value.length;

    if (pos_caractereCEP == 5)
    {
        campoCEP.value += '-'
    }
})
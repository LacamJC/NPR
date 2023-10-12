
var texto_1 = 'Você descarta os residuos em nossos pontos de coleta'
var texto_2 = 'Nossos motoristas vão até o local recolher eles para que sejam levados ao lugar correto'
var texto_3 = 'Possuimos semanalmente a agenda de horarios para a coleta do lixo para melhor utilização dos pontos'
var texto_4 = 'Assim todo residuo descartado corretamente terá um lugar para ir e não irá poluir o planeta '

function circulo(num)
{
    var caixa_txt = document.getElementById('text_coleta')
    if (num== 1)
    {
        caixa_txt.innerHTML = texto_1

        document.getElementsByClassName('circulo1')[0].classList.add('check')

        document.getElementsByClassName('circulo2')[0].classList.remove('check')
        document.getElementsByClassName('circulo3')[0].classList.remove('check')
        document.getElementsByClassName('circulo4')[0].classList.remove('check')
    }

    else if(num==2)
    {
        caixa_txt.innerHTML = texto_2

        document.getElementsByClassName('circulo2')[0].classList.add('check')

        document.getElementsByClassName('circulo1')[0].classList.remove('check')
        document.getElementsByClassName('circulo3')[0].classList.remove('check')
        document.getElementsByClassName('circulo4')[0].classList.remove('check')
     
   
    }

    else if(num==3)
    {
        caixa_txt.innerHTML = texto_3

        document.getElementsByClassName('circulo3')[0].classList.add('check')

        document.getElementsByClassName('circulo1')[0].classList.remove('check')
        document.getElementsByClassName('circulo2')[0].classList.remove('check')
        document.getElementsByClassName('circulo4')[0].classList.remove('check')
    }

    else if(num==4)
    {
        caixa_txt.innerHTML = texto_4

        document.getElementsByClassName('circulo4')[0].classList.add('check')

        document.getElementsByClassName('circulo3')[0].classList.remove('check')
        document.getElementsByClassName('circulo2')[0].classList.remove('check')
        document.getElementsByClassName('circulo1')[0].classList.remove('check')
    }

    else
    {
        caixa_txt.innerHTML = 'ERRO'
    }

}
/*
function fundo(pos) {
    var circulo;
    var i;
    if (pos == 1) {
        i == 0;
      circulo = document.getElementsByClassName('circulo1')[0];
      if (circulo && i == 0) {
        circulo.classList.add('check');
      }
      else 
      {
        circulo.classList.remove('check')
      }
      
      
    }
    else if(pos == 2){
        i == 1
        circulo = document.getElementsByClassName('circulo2')[0];

    }
  

  }*/
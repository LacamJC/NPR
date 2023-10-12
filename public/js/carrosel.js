
      
      let count = 1;
      document.getElementById('radio1').checked = true;
      
      
      setInterval( function()
      {
        proximaImagem();
      }, 6000) /*O valor colocado aqui mudara o tempo para mudança de slide ( 1000 = 1 segundo )*/ 
      
      function proximaImagem()
      {
        count++;
        if (count > 3)
        {
          count = 1;
        }
      
        
      
        document.getElementById('radio'+count).checked = true;

      }
      

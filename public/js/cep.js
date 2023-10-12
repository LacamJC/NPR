console.log("RODANDO")
function consultarCEP() {
    var cep = document.getElementById('id_cep').value;
    console.log("Rodando analise de CEP")
    cep = cep.replace('-','')
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        var data = response.data;

        if (data.erro) {
          console.log("CEP inválido");
          // Faça algo caso o CEP seja inválido
        } else {
          console.log('CEP:', data.cep);
          console.log('Logradouro:', data.logradouro);
          console.log('Bairro:', data.bairro);
          console.log('Cidade:', data.localidade);
          console.log('Estado:', data.uf);

          let rua = data.logradouro;

          document.getElementById('infoRua').value = rua
        //   document.getElementById('dados').textContent = JSON.stringify(data, null, 2);
        }
      })
      .catch(error => {
        console.error('Erro ao consultar CEP:', error.message);
        // Faça algo em caso de erro na requisição
      });
  }
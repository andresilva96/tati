$('#cep').change(function (e) {
  if ($(this).val().length == 8) {
    $.getJSON('https://viacep.com.br/ws/' + $(this).val() + '/json', function (data) {
      if ('error' in data) {
        return alert('Erro na API.');
      }
  
      $('#street').val(data.logradouro);
      $('#neighborhood').val(data.bairro);
      $('#city').val(data.localidade);
      $('#uf').val(data.uf);
    });
  }
});

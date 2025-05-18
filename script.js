//ao clicar nos projetos, lhe redireciona para o website deles
document.querySelectorAll('.projeto').forEach(projeto => {
  projeto.addEventListener('click', function() {
    const urls = [
      'https://fernandacamaral.github.io/zingen-project/',
      'https://fernandacamaral.github.io/portal-de-noticias/',
      'https://fernandacamaral.github.io/projeto-Travelgram/',
      'https://fernandacamaral.github.io/convert-project/',
      'https://fernandacamaral.github.io/formulario-de-matricula/'
    ];
    
    //Encontra o índice do projeto clicado
    const index = Array.from(document.querySelectorAll('.projeto')).indexOf(this);
    
    //Abre o link em uma nova janela
    window.open(urls[index], '_blank');
  });
});

//Declara as constantes utilizadas
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formularioContato');
  const numero = document.getElementById('numero');

  
  // Máscara para o campo de telefone
  numero.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove não-dígitos
    
    if (value.length <= 11) {
      // Formata o campo de numero como padrão (XX)XXXXX-XXXX
      if (value.length > 2) {
        value = '(' + value.substring(0, 2) + ')' + value.substring(2);
      }
      if (value.length > 9) {
        value = value.substring(0, 9) + '-' + value.substring(9);
      }
    }
    
    e.target.value = value;
  });
  
})

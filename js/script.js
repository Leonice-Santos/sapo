
// #botão-pula
// Adicionando o evento de clique ao botão 'botao-pular'
var distancia = 150;

$('#botao-pular').click(function(){

	$('#sapo').css('margin-top', '300px');
	$('#sapo').css('margin-left', distancia);
	$('#sapo').css('border', '2px solid red');

	distancia = distancia + 50;

	if (distancia > 1200) {
		distancia = 50
	}

});
var testes = document.getElementById("testes");
var url = window.location.search;
var amostraSAIDA = document.getElementById("am");
var analiseSAIDA = document.getElementById("ca");
var requisicaoSAIDA = document.getElementById("rn");

function a(){
	//pegando dados da URL
  var dadoSAMPLE = url.slice(6,14)//8chate, desde que o title = 4chat
  var dadoANALYSIS = url.slice(20,28)//8chate, desde que o title = 4chat
  amostraSAIDA.innerText = dadoSAMPLE
  analiseSAIDA.innerText = dadoANALYSIS
  
  //Criar o RQ_request number
  var data = new Date()
  var dia = data.getDate()
  var mes = data.getMonth()
  var ano = data.getFullYear()
  var timeHRS = data.getHours() > 9?  data.getHours(): "0" + data.getHours()
  var timeMIN = data.getMinutes() > 9? data.getMinutes(): "0" + data.getMinutes()
  var timeSEC = data.getSeconds() > 9? data.getSeconds(): "0" + data.getSeconds()
  
  var code = String(timeHRS) + String(timeMIN) + String(timeSEC) + "_" + String(ano) + String(mes) + String(dia)
  
  requisicaoSAIDA.innerText = code 
  
  //executar a gravação

  //FECHAR A pÁGINA
}

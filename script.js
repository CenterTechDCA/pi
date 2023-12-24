
const scriptURL = 'https://script.google.com/a/macros/solvay.com/s/AKfycbzNQp-mdw5_PhrKTgQG9POb_JryelmBYjh8R6tH7xkPY0JJWOFb8VWybriLHl1rYrediA/exec';

const form = document.forms['google-sheet1'];

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
        .then(Response => $("#form_alerts").html("<div class='alert alert-sucess'>Mensagem enviada com sucesso</div>"))
        .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Erro ao enviar a mensagem</div>"))
});


var testes = document.getElementById("testes");
var url = window.location.search;
var amostraSAIDA = document.getElementById("am");
var analiseSAIDA = document.getElementById("ca");
var requisicaoSAIDA = document.getElementById("rn");

window.onload = function a(){
  //pegando dados da URL: !!!OBSERVAÇÂO!!!file:///C:/Users/deol8576/Desktop/projeto%20PI%20+%20JS/index.html?name=6789ABCDanali=KLMNOPQR =>padronização
  var dadoSAMPLE = url.slice(6,14)//8chate, desde que o title = 4chat
  var dadoANALYSIS = url.slice(20,28)//8chate, desde que o title = 4chat
  amostraSAIDA.value = dadoSAMPLE
  analiseSAIDA.value = dadoANALYSIS
  
  //Criar o RQ_request number
  var data = new Date()
  var dia = data.getDate()
  var mes = data.getMonth()
  var ano = data.getFullYear()
  var timeHRS = data.getHours() > 9?  data.getHours(): "0" + data.getHours()
  var timeMIN = data.getMinutes() > 9? data.getMinutes(): "0" + data.getMinutes()
  var timeSEC = data.getSeconds() > 9? data.getSeconds(): "0" + data.getSeconds()
  
  var code = String(timeHRS) + String(timeMIN) + String(timeSEC) + "_" + String(ano) + String(mes) + String(dia)
  
  requisicaoSAIDA.value = code 
  
  //executar a gravação

  //FECHAR A pÁGINA
}


//### Guarda em vari�vel a p�gina atual
var sPagAtual=document.location.href.toUpperCase();

//### Fun��o que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+FC$.IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);
}

//### Fun��o que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inv�lida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

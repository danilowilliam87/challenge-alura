let campoTexto = document.querySelector('#texto');
let btnEncriptar = document.querySelector('#btnEncriptar');
let btnDescriptar = document.querySelector('#btnDescriptar');
let btnCopiar = document.querySelector('#btnCopiar');
let campoSaida = document.querySelector('#saida');
let vogais = ['e','i','a','o','u'];
let cifras = ['enter','imes','ai','ober','ufat'];

function helloWorld(){
    console.log('testando acionamento dos botoes');
}

function encriptarTexto(){
    let mensagem = campoTexto.value.split('');
    for(let i = 0; i < mensagem.length; i++){
        for(let k = 0; k < 5; k++){
            if(mensagem[i] === vogais[k]){
                mensagem[i] = cifras[k];
            }
        }
    }
    mensagem = mensagem.toString().replaceAll(',','');
    return mensagem;
}


function substituirPalavras(){
    let texto = campoTexto.value;
    if(campoTexto.value != null){
        texto = texto.replaceAll('enter','e');
        texto = texto.replaceAll('imes','i');
        texto = texto.replaceAll('ai','a');
        texto = texto.replaceAll('ober','o');
        texto = texto.replaceAll('ufat','u');
    }
    return texto;
}


function descriptarTexto(){
   campoSaida.value = substituirPalavras();
}


function copiarMensagem(){
    if(campoSaida.value != null){
        campoTexto.value = '';
        campoTexto.value = campoSaida.value;
    }
}

btnEncriptar.addEventListener('click', ()=>{
    if(campoSaida.value != null){
        campoSaida.value = '';
    }
   let mensagem = encriptarTexto();
   campoSaida.value = mensagem;
});

btnDescriptar.addEventListener('click', ()=>{
    descriptarTexto();
 });
 
btnCopiar.addEventListener('click', ()=>{
    copiarMensagem();
})

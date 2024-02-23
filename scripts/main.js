/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"
*/

/* <textarea class="codificador__digitar__titulo">Digite o seu texto</textarea> */


let textArea = document.querySelector('.codificador__digitar__titulo').innerHTML;
let str = new String(textArea);
// console.log(str);

let btnCripto = document.getElementById('criptografia');

let msgCriptografada;
function criptografia(mensagem) {
    msgCriptografada = mensagem.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return msgCriptografada;
}

console.log(criptografia(str));

let msgDescripto;
function descriptografia(mensagem) {
    msgDescripto = mensagem.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
    return msgDescripto;
}

console.log(descriptografia(msgCriptografada));
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

function letra_e(mensagem) {
    if(str.includes('e')){
        console.log('tem letra aqui');
        msgCript = mensagem.replace(/e/g, 'enter');
    } else {
        console.log('aqui não tem');
    }
    return msgCript;
}

function letra_a(mensagem) {
    if(str.includes('a')){
        console.log('tem letra aqui');
        msgCripA = mensagem.replace(/a/g, 'ai');
    } else {
        console.log('aqui não tem');
    }
    return msgCripA;
}

console.log(letra_e(str));
console.log(letra_a(msgCript));
console.log(letra_a(msgCriptA));
console.log(letra_a(msgCript));
console.log(letra_a(msgCript));
console.log(letra_a(msgCript));

const resultadoTexto = document.querySelector(".codificador__resultado__texto");
resultadoTexto.style.fontWeight = "400";
resultadoTexto.style.fontSize = "1.5rem";
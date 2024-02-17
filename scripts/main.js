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

const textArea = document.querySelector('.codificador__digitar__titulo').innerHTML;
const str = new String(textArea);
console.log(str);

function find_e() {
    // console.log(textArea.replace('e', 'enter'));
    for(let i = 0;i < arr.length;i++){
        // console.log(arr[i].replace('e', 'enter'));
        // console.log(arr[i]);
    }
}

let rgx = /e/g;
let arr = [...textArea.matchAll(rgx)];

const resultadoTexto = document.querySelector(".codificador__resultado__texto");
resultadoTexto.style.fontWeight = "400";
resultadoTexto.style.fontSize = "1.5rem";
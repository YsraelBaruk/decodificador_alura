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
let text;

function testRegex(textInput) {
    let regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ.,~!@#$%&*)({}_'0-9]+$/;
    let textArr = textInput.split("");
    const existTextInvalid = textArr.find((element) => regex.test(element));
    return existTextInvalid ? false : true;
}

getInputText = () => {
    let textArea = document.querySelector('.codificador__digitar__titulo');
    
    console.log(testRegex(textArea.value));
    if (!textArea) {
      return false;
    }
    return textArea.value;
};
setOutputText = (text) => {
    if (!text) {
      return false;
    }
    document.getElementById("output_default").classList.add("desactive");
    document.getElementById("output_default_txt").classList.remove("desactive");
    document.getElementById("text_output").innerText = `${text}`;

}

function copiarTexto() {
    let textoCopiado = document.getElementById("text_output").textContent;
    navigator.clipboard.writeText(textoCopiado);
}
let copy = document.getElementById("copiar");
copy.addEventListener("click", function(){
    copiarTexto();
});

function criptografia(mensagem) {
    const resultado = mensagem
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    setOutputText(resultado);
    return resultado;
}

function descriptografia(mensagem) {
    const resultado = mensagem
    .replaceAll(/ufat/g, 'u')
    .replaceAll(/ober/g, 'o')
    .replaceAll(/ai/g, 'a')
    .replaceAll(/imes/g, 'i')
    .replaceAll(/enter/g, 'e');

    setOutputText(resultado);
    return resultado;
}

let btnDescript = document.getElementById("descriptografia");
btnDescript.addEventListener("click", () => {
    const textInput = getInputText();
    console.log(descriptografia(textInput));
    descriptografia(textInput);    
});

let btnCripto = document.getElementById('criptografia');
btnCripto.addEventListener("click", () => {    
    const textInput = getInputText();
    let valid = testRegex(textInput);
    if(!valid){
        return false; 
    } else {
        console.log(criptografia(textInput));
        criptografia(textInput);
    }
});






// msgCriptografada = mensagem.replace(/e/g, 'enter');
// msgCriptografada = msgCriptografada.replace(/i/g, 'imes');
// msgCriptografada = msgCriptografada.replace(/a/g, 'ai');
// msgCriptografada = msgCriptografada.replace(/o/g, 'ober');
// msgCriptografada = msgCriptografada.replace(/u/g, 'ufat');
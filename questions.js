//1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}


document.getElementById('resultado').innerText = 'O valor da variável SOMA é: ' + SOMA;


//2
function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);
    const fibonacci = [0, 1];
    
    let i = 2;
    while (fibonacci[i - 1] <= numero) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }

    const resultado = document.getElementById('result');
    if (fibonacci.includes(numero)) {
        resultado.innerText = `${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultado.innerText = `${numero} não pertence à sequência de Fibonacci.`;
    }
}

//3

// Sequência a) 1, 3, 5, 7, ___
function proximoElementoSequenciaA() {
    const sequencia = [1, 3, 5, 7];
    const ultimoElemento = sequencia[sequencia.length - 1];
    const proximoElemento = ultimoElemento + 2;
    return proximoElemento;
}

// Sequência b) 2, 4, 8, 16, 32, 64, ____
function proximoElementoSequenciaB() {
    const sequencia = [2, 4, 8, 16, 32, 64];
    const ultimoElemento = sequencia[sequencia.length - 1];
    const proximoElemento = ultimoElemento * 2;
    return proximoElemento;
}

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
function proximoElementoSequenciaC() {
    const sequencia = [0, 1, 4, 9, 16, 25, 36];
    const ultimoElemento = sequencia[sequencia.length - 1];
    const proximoElemento = Math.pow(Math.floor(Math.sqrt(ultimoElemento)) + 1, 2);
    return proximoElemento;
}

// Sequência d) 4, 16, 36, 64, ____
function proximoElementoSequenciaD() {
    const sequencia = [4, 16, 36, 64];
    const ultimoElemento = sequencia[sequencia.length - 1];
    const proximoElemento = ultimoElemento + 20;
    return proximoElemento;
}

// Sequência e) 1, 1, 2, 3, 5, 8, ____
function proximoElementoSequenciaE() {
    const sequencia = [1, 1, 2, 3, 5, 8];
    const ultimoElemento = sequencia[sequencia.length - 1];
    const penultimoElemento = sequencia[sequencia.length - 2];
    const proximoElemento = ultimoElemento + penultimoElemento;
    return proximoElemento;
}

// Sequência f) 2,10, 12, 16, 17, 18, 19, ____
function proximoElementoSequenciaF() {
    const sequencia = [2, 10, 12, 16, 17, 18, 19];
    const ultimoElemento = sequencia[sequencia.length - 1];
    const diferenca = sequencia[sequencia.length - 1] - sequencia[sequencia.length - 2];
    const proximoElemento = ultimoElemento + diferenca;
    return proximoElemento;
}

// Exibindo os próximos elementos de cada sequência no HTML
document.getElementById('resultadoA').innerText = proximoElementoSequenciaA();
document.getElementById('resultadoB').innerText = proximoElementoSequenciaB();
document.getElementById('resultadoC').innerText = proximoElementoSequenciaC();
document.getElementById('resultadoD').innerText = proximoElementoSequenciaD();
document.getElementById('resultadoE').innerText = proximoElementoSequenciaE();
document.getElementById('resultadoF').innerText = proximoElementoSequenciaF();


//5

// Função para inverter uma string
function inverterString() {
    const inputString = document.getElementById('inputString').value;
    let novaString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        novaString += inputString[i];
    }
    document.getElementById('answer').innerText = "String invertida: " + novaString;
}


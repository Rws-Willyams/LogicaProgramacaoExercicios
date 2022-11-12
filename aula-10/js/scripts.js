
let numeroInicial = prompt('Digite o primeiro número');
let sinal = prompt('Digite o sinal da operação');

while(sinal != '+' && sinal != '-' && sinal != '*' && sinal != '/'){
  
    alert('Por favor digite um sinal válido: ');
    sinal = prompt('Digite o sinal de sua operação');

}

let numeroFinal = prompt('Digite o segundo número: ');

numeroInicial = parseInt(numeroInicial);
numeroFinal = parseInt(numeroFinal);

let resultadoFinal = 0;

if(sinal == '+'){

    resultadoFinal = numeroInicial + numeroFinal;

}else if(sinal == '-'){

    resultadoFinal = numeroInicial - numeroFinal;

}else if(sinal == '*'){

    resultadoFinal = numeroInicial * numeroFinal;

}else if(sinal == '/'){

    resultadoFinal = numeroInicial / numeroFinal;
}

alert('O resultado final é: '+resultadoFinal);
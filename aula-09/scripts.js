
let anoNascimento = prompt('Digite seu ano de nascimento: ');

while(anoNascimento >= 2022){

    alert('Por favor informe o ano de nascimento correto: ');
    anoNascimento = prompt('Digite seu ano de nascimento: ');
}


let anoAtual = prompt('Informe o ano atual: ');

let idade = anoAtual - anoNascimento;
alert('Minha idade é: '+idade);
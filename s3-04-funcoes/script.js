//FUNÇÕES

/*
function nomeDaFuncao(){


}
nomeDaFuncao()
*/

function login(){
    let username = prompt("Digite seu username:");
    let password = prompt("Digite a sua senha");

    alert(username + " " +password);
}
//login();

function soma(a,b){
    let soma = a+b;
    return soma;
}

let val1 = parseFloat(prompt("Digite um valor numerico"));
let val2 = parseFloat(prompt("Digite um valor numerico"));

let resultado = soma(val1, val2);
resultado = resultado / 2;

console.log(resultado);



function soma(a,b){
    return a+b;
}

function calculadora(a,b,op){
    if(op == '+'){
        return soma(a,b);
    }else if(op == '-'){
        return a - b;
    }else if(op == '*'){
        return a * b;
    }else if(op == '/'){
        return a/b;
    }else{
        alert(`A operação ${op} não está disponivel`);
    }
}

console.log(calculadora(4,2,'+'));
console.log(calculadora(4,2,'-'));
console.log(calculadora(4,2,'*'));
console.log(calculadora(4,2,'/'));
console.log(calculadora(4,2,'thiago'));


function format2char(n){
    if(n<10){
        return '0'+n
    }else{
        return n;
    }
}

function formataData(dia,mes,ano){

    let diaF = format2char(dia);

    let mesF = format2char(mes)

    let anoF = `${ano}`;
    anoF = `${anoF[2]}${anoF[3]}`;

    return `${diaF}/${mesF}/${anoF}`;
}

let diaAtual = 8;
let mesAtual = 12;
let anoAtual = 2022;

let dataAtualFormatada = formataData(diaAtual, mesAtual, anoAtual);

console.log(`A data de hoje é ${dataAtualFormatada}`);
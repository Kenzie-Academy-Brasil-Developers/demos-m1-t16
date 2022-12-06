
let nome = 'Thiago';     //6 - 5 = tamanho - 1
let sobrenome = 'Koman'; //5 - 4 = tamanho - 1

console.log(nome);
console.log(sobrenome);

let nomeCompleto = nome + ' ' + sobrenome;

//TEMPLATE STRING
let nomeCompletoTemp = `O nome do usuário é: ${nome} ${sobrenome}`;

console.log(nomeCompleto);
console.log(nomeCompletoTemp);

console.log(nome.length);
console.log(sobrenome.length);

console.log(nome[0]);
console.log(sobrenome[0]);

let apelido = nome[0] + sobrenome[0];

console.log(apelido);

console.log(nome[5]);
console.log(sobrenome[4]);

console.log(nome[nome.length - 1])
console.log(sobrenome[sobrenome.length - 1])


let nome2 = prompt('Digite o seu nome:');
let sobrenome2 = prompt('Digite o seu sobrenome:');

console.log(nome2, nome2[nome2.length - 1]);
console.log(sobrenome2, sobrenome2[sobrenome2.length - 1]);

/*
IMC = peso / altura² 

IMC = peso / (altura * altura)
*/

let peso = parseInt( prompt('Digite seu peso') );
let altura = parseFloat( prompt('Digite sua altura') );

let imc = peso / (altura * altura);

alert('Seu imc é : ' + imc);


//COMPARADORES
let idade1 = parseInt(prompt('Digite a idade do primeiro usuario'));
let idade2 = prompt('Digite a idade do segundo usuario');

//OPERADORES LÓGICOS
//NOT - (!)
//OR  - (||) ou
//AND - (&&) e





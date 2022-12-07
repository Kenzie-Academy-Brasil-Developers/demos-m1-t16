//INCREMENTO
let contador = 0;
console.log(contador);

contador++; //0+1 = 1
console.log(contador)    //1

contador = contador + 1; //1+1 = 2 
console.log(contador)    //2

contador = contador + 1; //2+1 = 3
console.log(contador)    //3

contador = contador + 1; //3+1 = 4
console.log(contador)    //4

contador = contador + 1; //4+1 = 5
console.log(contador)    //5


/// contador++ -> contator = contador + 1


let dec = 5;
console.log(dec);
dec--;
console.log(dec);
dec--;
console.log(dec);
dec--;
console.log(dec);
dec--;
console.log(dec);
dec--;
console.log(dec);



let cont = 0;
console.log(cont)

cont += 2;       //2
cont += 2;       //4
cont = cont + 2; //6
console.log(cont);

cont++           //7
cont+=1          //8
cont = cont + 1  //9
console.log(cont);


//CONDICIONAIS
//IF, ELSE, ELSE IF

let nome = prompt("Digite seu nome");

//Se nome igual a "Thiago"
if(nome == "Thiago"){
    alert(`Acesso liberado, seja bem vindo ${nome} com perfil de admin`);
}else if(nome == "Eduardo" || nome == "Alessandra"){
    alert(`Acesso liberado, seja bem vindo ${nome}`);
}else{
    alert(`Acesso bloqueado, usuário "${nome}" sem permissão de acesso!`);
}


if(nome == '1'){
    console.log('nome1');
}else if(nome == '1'){
    console.log('nome2');
}else if(nome == '1'){
    console.log('nome3');
}else {
    console.log('outro');
}

// ESCOPO DE VARIAVEL
// let - escopo de bloco ( escopo local )
// var - escopo global ou de função
// const - constante 


let boleano = true;
let global = 'Estou testando o escopo global';

if(boleano == true){
    let local = 'Estou testando o escopo local';
    console.log(global);
    console.log(local);
}

console.log(global);
console.log(local);

var teste = '0';
var teste = 1; 

if(teste == 1){
    if(teste == 1){

    }
}


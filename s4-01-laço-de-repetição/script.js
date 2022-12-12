//WHILE (Enquanto)

/*
while(condição para execução){
    //o código que será repetido
}
*/


console.log('Inicializou');
let i = 0;
while(i<10){
    i++;
    console.log(i);
}
console.log('Finalizou');

//1,2,3,4,5,6,7,8,9,10

let nome = "Thiago Koman Schmidt";
let j = 0;
let maiusculas = "";
while(j < nome.length){
    if(nome[j] == nome[j].toUpperCase()){
        maiusculas = maiusculas + nome[j]
    }
    j++;
}
console.log(maiusculas);

//DO WHILE
/*
do{
    //código que será executado
}while(Condição para execução );
*/
// let k = 0;
// do{
//     k++;
//     console.log(k);
// }while(k<10);


let k = 12;
do{
    k++;
    console.log(k);
}while(k<10);


// let i = 0; //inicialização
while(i<10){ //condição
    console.log(i);
    i++; //iteração
}

//FOR
// for(inicialização ; condição para execução ; iteração){

// }

// for(let i = 1 ; i<=10 ; i++){
//     console.log(i);
// }

for(let l = 0 ; l < nome.length ; l++){
    if(nome[l] == nome[l].toUpperCase()){
        maiusculas = maiusculas + nome[l]
    }
}
console.log(maiusculas);
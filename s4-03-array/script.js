//ARRAY
// let arr = [];

// console.log(arr);

// arr.push(1);
// arr.push(2);
// arr.push(3);

// console.log(arr);

// arr.unshift(0);

// console.log(arr);

//             0         1      2     3
let arr2 = ['Thiago', 'Koman', 24, [22,1]];
// console.log(arr2);

// console.log(arr2[0])
// console.log(arr2[2])

// let ultimaPosica = arr2.length - 1;
// console.log(arr2[ultimaPosica]);


// let str = "Thiago Koman"; // 12 caracteres //11
// console.log(str[str.length - 1]);

// let lista = ['Thiago', 'Eduardo', 'Lorena', 'Alessandra']; //4

// //percorrer o array
// //verificar se cada valor armazenado no array é igual a palavra recebida por parametro
function vericaValor(arr, palavra){
    for(let i = 0 ; i < arr.length ; i++){ //2
        console.log(arr[i]);
        if(arr[i] == palavra){
            return true;
        }
    }    
    return false;
}

console.log(vericaValor(lista, 'João'));


let notasJoao = [10,8,7,9,10,10,8];
let notasThiago = [2,5,7,3,5,4,6];

function calculaMedia(arr){
    let soma = 0;
    for(let i = 0; i < arr.length ; i++){
        soma = soma + arr[i];
        //soma += arr[i];
    }
    let media = soma / arr.length
    if(media >= 7){
        return `Você passou de ano com a média ${media.toFixed(2)}`;
    }else{
        return `Infelizmente você não alcançou a média estipulada, ficando com ${media.toFixed(2)} pontos na média`;
    }
}

let retorno = calculaMedia(notasJoao) 
console.log(retorno);





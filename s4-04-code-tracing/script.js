//TESTE DE MESA

//Erros de sintaxe
//Erros de lógica

function teste(){
    let soma = 0;
    for(let i = 0; i <= 10 ; i+=2 ){
        soma = soma + i;
    }
    return soma;
}



function consultaPosicao(lista, palavra){
    for(let i = 0; i<lista.length; i++){
        // console.log(i, lista[i], i<lista.length,lista[i] == palavra )
        if(lista[i] == palavra){
            return  `O valor procurado está na posição: ${i}`
        }
    }
    return "Valor não encontrado";
    
    //percorrer a lista
        //verificar se lista na posição atual é igual a 'palavra'
            //return "O valor procurado está na posição: x "
    // return "Valor não encontrado"
}

let list = ['Thiago', 'Pedro', 'Bruno'];

consultaPosicao(['Thiago', 'Pedro', 'Bruno'], 'Pedro');



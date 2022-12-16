let arrPessoa = ['Thiago', 'Koman', 24, [1,22], true];

let pessoa = {
    nome: "Thiago",
    sobrenome: "Koman",
    idade: 24,
    aniversario: [1,22],
    admin: true 
};

// console.log(typeof pessoa)

console.log(arrPessoa[0]);
console.log(pessoa['nome']);

console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos de idade`)
//thiago koman tem 24 anos de idade
console.log(pessoa);

delete pessoa.aniversario;
//delete pessoa['aniversario'];

console.log(pessoa);

let lista = [
    {
        modelo: 'Civic',
        ano: '2000',
        marca: 'Honda',
        cor: 'Preto',
        preco: 20000
    },
    {
        modelo: 'Skyline',
        ano: '1998',
        marca: 'Nissan',
        cor: 'Azul',
        preco: 35000
    },
    {
        modelo: 'Lancer',
        ano: '2008',
        marca: 'Mitsubish',
        cor: 'Branco',
        preco: 15000
    },
    {
        modelo: 'Supra',
        ano: '1998',
        marca: 'Toyota',
        cor: 'Vermelho',
        preco: 40000
    },
];

// console.log(lista);

function procuraCarroPrecoMax(carros, preco){
    let carrosSelecionados = [];
    for(let i = 0 ; i<carros.length ; i++){
        let carro = carros[i];
        let carroPreco = carros[i].preco;
        if(carroPreco <= preco){
            carrosSelecionados.push(carro);
        }
    }
    return carrosSelecionados;
}
// console.log(procuraCarroPrecoMax(lista, 39000));

function procuraCarroPorChave(carros, propriedade, valor){
    let carrosSelecionados = [];
    for(let i = 0; i<carros.length ; i++){
        let carro = carros[i];
        let carroValor = carro[propriedade];
        if(carroValor == valor){
            carrosSelecionados.push(carro);
        }
    }
    return carrosSelecionados;
}

let retorno = procuraCarroPorChave(lista, 'ano', '1998');

console.log('VEICULOS ENCONTRADO:')
for(let i = 0; i<retorno.length ; i++){
    let carro = retorno[i];
    console.log(`Modelo: ${carro.modelo} \nAno: ${carro.ano} \nMarca: ${carro.marca} \nCor: ${carro.cor} \nPreço: R$${carro.preco.toFixed(2)}`)
}


console.log(procuraCarroPrecoMax(retorno, 39000));
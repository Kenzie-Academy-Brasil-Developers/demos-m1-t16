let carros = [
    {
        id: 1,
        marca: "Toyota",
        modelo: "Supra",
        ano: 1998,
        cor: "Vermelho",
        placa: "TXW-1322",
        diaria: 220.00
    },
    {
        id: 2,
        marca: "Nissan",
        modelo: "Skyline",
        ano: 2001,
        cor: "Azul",
        placa: "SKY-2012",
        diaria: 215.50
    },
    {
        id: 3,
        marca: "Mitsubish",
        modelo: "Lancer",
        ano: 2008,
        cor: "Branco",
        placa: "LCR-1515",
        diaria: 190.00
    },
    {
        id: 4,
        marca: "Subaru",
        modelo: "Impreza",
        ano: 1999,
        cor: "Azul",
        placa: "IMP-0129",
        diaria: 152.00
    }
];

let alugueis = [];

let user = {
    id: 0,
    nome: "",
    anoNascimento: 0,
    cnh: "",
    alugar: function(){
        let idCarro = parseInt(prompt('Digite o id do carro a ser alugado'));
        if(verificarDisponibilidade(idCarro) == false ){
            alert('O veículo está indisponivel no momento');
            return;
        }
        let calc = prompt('Deseja calcular o valor do aluguel? (S ou N)');
        if(calc == 'S'){
            this.orcamento(idCarro);
        }
        let aluguel = {
            carro: idCarro,
            usuario: this.id
        }
        alugueis.push(aluguel);
    },
    orcamento: function(idCarro){
        if(!idCarro){
            idCarro = parseInt(prompt('Digite o id do carro'));
        }
        let dias = parseInt(prompt('Quantos dias você deseja permanecer com o veículo?'));
        let carro = buscarCarro(idCarro);
        let valorDiaria = carro.diaria;
        let valorAlugel = valorDiaria * dias;
        alert(`Você está alugando o veículo ${carro.marca} ${carro.modelo} ${carro.ano} por ${dias} dias, e o valor total do aluguel fica: R$${valorAlugel.toFixed(2)}`);
    },
    devolver: function(){
        let idCarro = parseInt(prompt('Digite o id do carro a ser devolvido'));
        for(let i = 0; i<alugueis.length ; i++){
            if(alugueis[i].carro == idCarro && alugueis[i].usuario == this.id){
                alugueis.splice(i,1);
                alert('Devolução realizada com sucesso');
                return;
            }
        }
    }
}

let countId = 1;

function cadastrarUsuario(){
    alert('Iniciando cadastro do usuário');
    let nome = prompt('Digite seu nome');
    let ano = parseInt(prompt('Digite o ano de nascimento'));
    let cnh = prompt('Digite a sua CNH');

    if((2022 - ano) < 18){
        alert('Cadastro inválido! Usuário possuí menor de 18 anos.');
        return;
    }

    let usuario = {...user};

    usuario.nome = nome;
    usuario.anoNascimento = ano;
    usuario.cnh = cnh;
    usuario.id = countId;
    countId++;

    alert('Cliente cadastrado com sucesso');

    return usuario;

}

function buscarCarro(idCarro){
    for(let i = 0 ; i < carros.length ; i++){
        let carro = carros[i];
        if(carro.id == idCarro){
            return carro;
        }
    }
    alert('Veiculo não encontrado');
}

function listarCarros(){
    console.log('-- VEICULOS DA EMPRESA --');
    for(let i = 0 ; i<carros.length ; i++){
        let carro = carros[i];
        console.log(`${carro.id} - ${carro.marca} ${carro.modelo} ${carro.ano}`);
    }
}

function listarCarrosDisponiveis(){
    console.log('-- VEICULOS DISPONIVEIS --');
    for(let i = 0 ; i<carros.length ; i++){
        let carro = carros[i];
        if(verificarDisponibilidade(carro.id) == true){
            console.log(`${carro.id} - ${carro.marca} ${carro.modelo} ${carro.ano}`);
        }
    }
}

function verificarDisponibilidade(idCarro){
    for(let i = 0 ; i<alugueis.length ; i++){
        let aluguel = alugueis[i]
        if(idCarro == aluguel.carro){
            return false;
        }
    }
    return true;
}


console.log(`Funções disponiveis \n - cadastrarUsuario() \n - buscarCarro(idCarro) \n - listarCarros() \n - listarCarrosDisponiveis() \n - verificarDisponibilidade(idCarro)`);

console.log(`Metodos disponiveis para um usuário \n - alugar() \n - orçamento() \n - devolver()`);
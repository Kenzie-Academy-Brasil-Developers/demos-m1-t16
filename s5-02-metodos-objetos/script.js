let produto = {
    tipo: "Alimento",
    nome: "Feijão",
    tipo: "Carioca",
    valor: 5.49,
    unidade: "kg",
    quantidade: 1
}
// console.log(produto.valor)


let gato = {
    miar: function(){
        alert('Miau');
    },
    ronronar: function(){
        alert('Ronronron');
    },
}
// gato.miar();
// gato.ronronar();

function calculadora1(a,b,op){
    if(op == '+')
    {
        return a+b;
    }
    else if(op == '-')
    {
        return a-b;
    }
    else if(op == '*')
    {
        return a*b;
    }
    else if(op == '/')
    {
        return a/b;
    }
    return 'Operação não cadastrada';
}
// console.log(calculadora1(6,3,'/'));

//ATRIBUTOS --> Variaveis
//MÉTODOS --> Funções
//PROPRIEDADE --> método e atributo
let calculadora2 = {
    a: 100, 
    b: 50,
    soma: function(){
        return this.a + this.b;
    },
    subtrai: function(){
        return this.a - this.b;
    },
    multiplica: function(){
        return this.a * this.b;
    },
    divide: function(){
        return this.a / this.b;
    },
    somarP: function(a,b){
        return a+b;
    },
    porcentagem: function(a,b){
        this.a = b;
        this.b = a;

        let calc = this.divide();
        calc = calc * a;

        return calc;
    }
}
// console.log(calculadora2.porcentagem(100,50))
// console.log(calculadora2.soma())
// console.log(calculadora2.multiplica())
// console.log(calculadora2.somarP(5,5))

function formatNumber_2Decimals(n){
    let num = n.toFixed(2);
    return parseFloat(num);
}

function formatNumber_percentage2Unity(n){
    let percent = n/100;
    return percent;
}


let pet = {
    especie: 'Gato',
    pelagem: 'Curta',
    raca: 'Siames',
    nome: 'Felicia',
    miar: function(){
        alert('Miau');
    },
    ronronar: function(){
        alert('RonRonRon');
    }
}

let caixaDeSuprimentos = [];

let higiene = ['Creme Dental', 'Sabonete', 'Shampoo', 'Fio Dental', 'Papel Higienico'];
let alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate'];
let farmacia = ['Dipirona', 'Agua oxigenada', 'Anador', 'lasanha', 'Eno'];
let lazer = ['Carrinho da HotWheels', 'PC Gamer', 'Bola Quadrada', 'Max Steel', 'Uno'];

// caixaDeSuprimentos = [higiene, alimentacao, farmacia, lazer];
caixaDeSuprimentos.push(higiene)
caixaDeSuprimentos.push(alimentacao)
caixaDeSuprimentos.push(farmacia)
caixaDeSuprimentos.push(lazer)

if(caixaDeSuprimentos.length == 4){
    let count = 0;
    for(let i = 0; i<caixaDeSuprimentos.length; i++){
        if(caixaDeSuprimentos[i].length == 5){
            count++;
        }else if(caixaDeSuprimentos[i].length > 5){
            alert(`Tem itens demais na seção ${i+1}, não precisamos de tantos`)
        }else{
            alert(`Precisamos de mais itens na seção ${i+1}.`)
        }
    }
    if(count == 4){
        alert('Podemos ir acampar');
    }


}else if(caixaDeSuprimentos.length < 4){
    alert('Algum amigo ainda não retornou com os itens.')
}else{
    alert('Acho que temos um intruso.')
}








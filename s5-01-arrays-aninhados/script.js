let arr1dim = [12,13,15,17,19,22,25];

let arrDiversificado = [12, 'Thiago', [12,13], {nome: 'Thiago', idade: 24}];

let arrAninhado = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// console.log(arrAninhado)
for(let i = 0 ; i < arrAninhado.length ; i++){
    // let arrFilho = arrAninhado[i];
    for(let j = 0 ; j < arrAninhado[i].length ; j++){
        // console.log(arrAninhado[i][j])
    }
}

//[matematica, quimica, fisica, filosofia, historia]
let arrayNotas = [
    [100, 45, 56, 87, 100], //Aluno 1
    [89, 87, 67, 89, 100],  //Aluno 2
    [56, 78, 12, 15, 22]    //Aluno 3
]

function calculaMediaTurma(notas){
    let soma = 0;
    let cont = 0;
    for(let i = 0; i<notas.length ; i++){
        for(let j = 0 ; j<notas[i].length ; j++){
            soma+=notas[i][j];
            cont++;
        }
    }

    let media = soma / cont;
    return `A media das notas dos alunos é ${media.toFixed(2)}`;

}
// console.log(calculaMediaTurma(arrayNotas));

function alunoAprovado(notas){
    for(let i = 0 ; i<notas.length ; i++){
        let soma = 0;
        let cont = 0;
        let aluno = notas[i];

        for(let j = 0; j<aluno.length; j++){
            soma+=aluno[j];
            cont++;
        }

        let media = soma/cont;

        if(media >= 80){
            console.log(`O aluno ${i + 1} foi APROVADO com a nota ${media.toFixed(2)}`);
        }else{
            console.log(`O aluno ${i + 1} foi REPROVADO com a nota ${media.toFixed(2)}`);
        }

    }
}
alunoAprovado(arrayNotas);



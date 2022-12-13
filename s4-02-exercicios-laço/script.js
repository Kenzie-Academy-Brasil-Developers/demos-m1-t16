//S4-03 EX.1
function renderUpToTwenty(){
    let str = "";
    for(let i = 0 ; i<=20 ; i++){
        if(i == 20){
            str = str + i
        }else{
            str = str + i + ", "
        }
    }
    return str;
}
//console.log(renderUpToTwenty());

//S4-03 EX.5
function fromNegativeToPositive(){
    let i = -10;
    while(i<=0){
        console.log(i);
        i++;
    }    
}
//fromNegativeToPositive();

function fromPositiveToNegative(){
    // let i = 0;
    // while(i>=-10){
    //     console.log(i);
    //     i--; 
    // }   

    for(let i = 0 ; i >=-10 ; i--){
        console.log(i);
    }
}
// fromPositiveToNegative();


//S4-03 EX.7
function toSquare(n){
    for(let i = 1 ; i<=n ; i++){
        let quadrado = i * i;
        console.log(`${i}² = ${quadrado}`);
    }
}
//toSquare(1000);

//S4-04 EX.3
function multiplosDeQuatro(){
    let i = 0;
    /*
    while(i < 200){
        if(i % 4 == 0){
            console.log(i);
        }
        i++;
    }
    */
    while(true){
        if(i % 4 == 0){
            console.log(i);
        }
        i++;
        if(i == 200){
            break;
        }
    }
}
//multiplosDeQuatro()

//S5-05 EX.1
function fibonacciNumbers(n){
    let anterior = 0
    let atual = 1
    let proximo = anterior + atual;
    let str = `${anterior}, ${atual}, ${proximo}`;
    for(let i = 3 ; i<n ; i++){
        anterior = atual;
        atual = proximo;
        proximo = anterior + atual;
        str+=`, ${proximo}`;
    }
    return str;
}
console.log(fibonacciNumbers(50));

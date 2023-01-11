//setAttribute()
let a = document.querySelector('a');
a.setAttribute('target', '_blank');
a.setAttribute('class', 'bkred');

//getAttribute()
let href = a.getAttribute('href');
console.log(href);

//removeAttribute()
let btn = document.querySelector('#btn-remove');
btn.addEventListener('click', function(event){
    a.removeAttribute('class');
})


//classList
let btnYell = document.querySelector('#btn-yellow');
let btnRed =  document.getElementById('btn-red');
let btnGreen = document.querySelector('#btn-green');
let btnBlue = document.querySelector('#btn-blue');

btnYell.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.remove('bkblue');
    a.classList.remove('bkgreen');
    a.classList.add('bkyellow');
})
btnRed.addEventListener('click', function(event){
    a.classList.toggle('bkred');
    a.classList.remove('bkblue');
    a.classList.remove('bkgreen');
    a.classList.remove('bkyellow');
})
btnGreen.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.remove('bkblue');
    a.classList.toggle('bkgreen');
    a.classList.remove('bkyellow');
})
btnBlue.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.toggle('bkblue');
    a.classList.remove('bkgreen');
    a.classList.remove('bkyellow');
})


//insertAdjacentHTML
let ref = document.querySelector('#referencia');
ref.insertAdjacentHTML('beforebegin', '<p>Antes do elemento</p>');
ref.insertAdjacentHTML('afterbegin', '<p>Dentro, antes primeiro filho</p>');
ref.insertAdjacentHTML('beforeend', '<p>Dentro, após o ultimo filho</p>');
// ref.insertAdjacentHTML('afterend', '<p>Após o elemento</p>');

//insertAdjacentElement
let p = document.createElement('p');
p.innerHTML = 'Após o elemento';

ref.insertAdjacentElement('afterend', p);







function createRemoveButton() {
    const removeButton = document.createElement("button"); // Criamos um botão
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", (e) => { // Adicionamos um evento nele.
        let arr = []
        for(let i = 0; i<list.length; i++){
            if(e.path[1].id !== i){
                arr.push(list[i]);
            } 
        }
        list = arr;

    //   list = list.filter(function(_, index){ 
    //     index !== Number(e.path[1].id)}
    //   );
      reloadList(); // Chamamos a função para recarregar a lista.
    });
    return removeButton;
}
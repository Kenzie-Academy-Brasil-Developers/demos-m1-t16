let parag = document.querySelector('#parag');
let show = document.querySelector('#show');
let hide = document.querySelector('#hide');

show.addEventListener('click', function(event){
    console.log(event.currentTarget);
    console.log(event);
    
    // [button#show, body, html, document, Window]
    event.path[1].style = 'background: gray;'
    
    // alert('Clicou no Show');
    parag.style = 'opacity: 1';
});

hide.addEventListener('click', function(event){
    console.log(event);
    // alert('Clicou no Hide')
    parag.style = 'opacity: 0';
})



//----------------------------------------------------------------------------------

let button = document.querySelector('#btn');
let div = document.querySelector('#teste');

button.addEventListener('click', function(event){
    console.log('Botão');
    event.stopPropagation();
})

div.addEventListener('click', function(event){
    console.log('Divisão');
})